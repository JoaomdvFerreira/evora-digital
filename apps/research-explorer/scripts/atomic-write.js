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
      fs.renameSync(targetDir, backupDir);
      backedUp = true;
    }
    fs.renameSync(tmpDir, targetDir);
  } catch (e) {
    if (backedUp && !fs.existsSync(targetDir) && fs.existsSync(backupDir)) {
      fs.renameSync(backupDir, targetDir);
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
