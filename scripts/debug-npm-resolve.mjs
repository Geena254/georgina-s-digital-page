import { appendFileSync, existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const sessionId = "2fac3b";
const endpoint = "http://127.0.0.1:7359/ingest/f2f4d01f-f11a-444d-8386-c38d0e4867f0";
const runId = process.env.DEBUG_RUN_ID || "pre-fix";

async function log(hypothesisId, location, message, data) {
  const payload = {
    sessionId,
    runId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  };
  appendFileSync("debug-2fac3b.log", JSON.stringify(payload) + "\n");
  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": sessionId },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));
const swcLock = lock.packages["node_modules/@vitejs/plugin-react-swc"];
const taggerLock = lock.packages["node_modules/lovable-tagger"];

const viteRange = pkg.devDependencies?.vite;
const swcRange = pkg.devDependencies?.["@vitejs/plugin-react-swc"];
const taggerRange = pkg.devDependencies?.["lovable-tagger"];

const viteMajor = Number(String(viteRange).match(/\d+/)?.[0] ?? NaN);
const swcPeer = swcLock?.peerDependencies?.vite ?? null;
const taggerPeer = taggerLock?.peerDependencies?.vite ?? null;
const swcAllowsVite8 = typeof swcPeer === "string" && (swcPeer.includes("^8") || swcPeer.includes("|| 8"));
const taggerAllowsVite8 = typeof taggerPeer === "string" && !taggerPeer.includes("<8");

// #region agent log
await log("A", "scripts/debug-npm-resolve.mjs:A", "Root Vite vs plugin-react-swc peer", {
  viteRange,
  swcRange,
  swcLockedVersion: swcLock?.version ?? null,
  swcPeer,
  viteMajor,
  swcAllowsVite8,
  conflictA: viteMajor >= 8 && !swcAllowsVite8,
});
// #endregion

// #region agent log
await log("B", "scripts/debug-npm-resolve.mjs:B", "Lockfile plugin pin vs package.json range", {
  packageSwcRange: swcRange,
  lockSwcVersion: swcLock?.version ?? null,
  lockRootVite: lock.packages[""]?.devDependencies?.vite ?? null,
  pkgRootVite: viteRange,
  lockfileName: lock.name,
  packageName: pkg.name,
});
// #endregion

// #region agent log
await log("C", "scripts/debug-npm-resolve.mjs:C", "lovable-tagger Vite peer (second conflict)", {
  taggerRange,
  taggerLockedVersion: taggerLock?.version ?? null,
  taggerPeer,
  taggerAllowsVite8,
  conflictC: viteMajor >= 8 && !taggerAllowsVite8,
});
// #endregion

let nodeModulesVite = null;
let nodeModulesSwc = null;
try {
  nodeModulesVite = existsSync("node_modules/vite/package.json")
    ? JSON.parse(readFileSync("node_modules/vite/package.json", "utf8")).version
    : null;
  nodeModulesSwc = existsSync("node_modules/@vitejs/plugin-react-swc/package.json")
    ? JSON.parse(readFileSync("node_modules/@vitejs/plugin-react-swc/package.json", "utf8")).version
    : null;
} catch (e) {
  nodeModulesVite = `error:${e.message}`;
}

// #region agent log
await log("D", "scripts/debug-npm-resolve.mjs:D", "Partial node_modules tree", {
  nodeModulesExists: existsSync("node_modules"),
  nodeModulesVite,
  nodeModulesSwc,
  reactTypesExist: existsSync("node_modules/@types/react/index.d.ts"),
  jsxRuntimeExist: existsSync("node_modules/react/jsx-runtime.js"),
});
// #endregion

let npmVersion = null;
try {
  npmVersion = execSync("npm --version", { encoding: "utf8" }).trim();
} catch (e) {
  npmVersion = e.message;
}

// #region agent log
await log("E", "scripts/debug-npm-resolve.mjs:E", "npm peer-dep enforcement", {
  npmVersion,
  npmMajor: Number(String(npmVersion).split(".")[0]),
  strictPeersLikely: Number(String(npmVersion).split(".")[0]) >= 7,
});
// #endregion

console.log("debug-npm-resolve: logs sent");
