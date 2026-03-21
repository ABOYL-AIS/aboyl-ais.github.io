import { spawnSync } from "node:child_process";

const root = process.cwd();
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const args = process.argv.slice(2);

function getFlagValue(flagNames) {
  for (let index = 0; index < args.length; index += 1) {
    if (flagNames.includes(args[index])) {
      return args[index + 1];
    }
  }
  return undefined;
}

function hasFlag(flag) {
  return args.includes(flag);
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function runQuiet(command, commandArgs) {
  return spawnSync(command, commandArgs, {
    cwd: root,
    stdio: "pipe",
    encoding: "utf8",
    shell: false,
  });
}

const message =
  getFlagValue(["--message", "-m"]) ??
  `content: update site on ${new Date().toISOString().slice(0, 10)}`;

console.log("Preparing site content before publish...");
run(npmCommand, ["run", "content:prepare"]);

console.log("Staging changes...");
run("git", ["add", "-A"]);

const diff = runQuiet("git", ["diff", "--cached", "--quiet"]);
if (diff.status === 0) {
  console.log("No staged changes detected. Skipping commit and push.");
  process.exit(0);
}

console.log(`Creating commit: ${message}`);
run("git", ["commit", "-m", message]);

if (hasFlag("--skip-push")) {
  console.log("Push skipped.");
  process.exit(0);
}

console.log("Pushing to remote...");
run("git", ["push"]);
