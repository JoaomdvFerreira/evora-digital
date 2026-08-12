#!/usr/bin/env node
/**
 * Atomic directory publish.
 *
 * `populate(tmpDir)` must fully build the new directory contents (and may run
 * its own integrity checks against what it just wrote) before returning. Only
 * once `populate` returns successfully does the previously published
 * `targetDir` get replaced — via a two-step rename (old -> backup, tmp ->
 * target) rather than a single rename-over, because replacing an existing
 * non-empty directory with `fs.renameSync` is not reliably atomic/safe on
 * Windows. Any failure, at any stage, leaves `targetDir` exactly as it was
 * before this call (or throws before ever touching it), and temporary/backup
 * directories are always cleaned up.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function sleepSync(ms) {
  const view = new Int32Array(new SharedArrayBuffer(4));
  Atomics.wait(view, 0, 0, ms);
}

/**
 * `fs.renameSync` can transiently fail with EPERM/EBUSY on Windows if
 * antivirus/indexing software briefly holds a handle inside the directory
 * being renamed right after it was written — observed in practice against
 * this repository's own generated output, not a hypothetical. Retries a
 * handful of times with a short backoff before giving up; any other error
 * code is rethrown immediately.
 */
function renameWithRetry(from, to, { attempts = 5, initialDelayMs = 25 } = {}) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      fs.renameSync(from, to);
      return;
    } catch (e) {
      lastError = e;
      if (e.code !== "EPERM" && e.code !== "EBUSY") throw e;
      sleepSync(initialDelayMs * (attempt + 1));
    }
  }
  throw lastError;
}

function publishDirectoryAtomically(targetDir, populate) {
  const parent = path.dirname(targetDir);
  const base = path.basename(targetDir);
  const suffix = `${process.pid}-${crypto.randomBytes(4).toString("hex")}`;
  const tmpDir = path.join(parent, `.${base}.tmp-${suffix}`);
  const backupDir = path.join(parent, `.${base}.backup-${suffix}`);

  fs.mkdirSync(parent, { recursive: true });
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });

  try {
    populate(tmpDir);
  } catch (e) {
    fs.rmSync(tmpDir, { recursive: true, force: true });
    throw e;
  }

  let backedUp = false;
  try {
    if (fs.existsSync(targetDir)) {
      renameWithRetry(targetDir, backupDir);
      backedUp = true;
    }
    renameWithRetry(tmpDir, targetDir);
  } catch (e) {
    if (backedUp && !fs.existsSync(targetDir) && fs.existsSync(backupDir)) {
      renameWithRetry(backupDir, targetDir);
      backedUp = false;
    }
    fs.rmSync(tmpDir, { recursive: true, force: true });
    throw e;
  }

  if (backedUp) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
}

module.exports = { publishDirectoryAtomically };
