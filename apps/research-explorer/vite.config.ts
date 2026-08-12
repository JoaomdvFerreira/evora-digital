import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Static deployment portability (ADR-001 D9 follow-on): `base` defaults to
// "/" but can be overridden at build time (e.g. `VITE_BASE_PATH=/open-evora/
// npm run build`) for a future sub-path deployment such as GitHub Pages,
// without any application code change — see src/dataProvider/StaticDataProvider.ts,
// which always builds asset URLs from `import.meta.env.BASE_URL` rather than
// a hardcoded "/". Not configured/deployed yet (that is RE-07 scope).
const basePath = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
  // RE-01's generated read model (apps/research-explorer/generated/) is
  // served directly as static assets, in both dev and production build, via
  // Vite's publicDir mechanism — no second, manually-maintained copy of the
  // data. `generated/` is gitignored and must exist before `vite dev`/`vite
  // build` run; the root `npm run explorer`/`explorer:build` commands always
  // run the RE-01 adapter first to guarantee that.
  publicDir: "generated",
  server: {
    strictPort: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  test: {
    // Business/runtime contracts only (StaticDataProvider, startup sequence,
    // read-model compatibility) — no React component rendering is tested in
    // RE-02A, so a plain Node environment is sufficient; no jsdom dependency
    // is needed.
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
