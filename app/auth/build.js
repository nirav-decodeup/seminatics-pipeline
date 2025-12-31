const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "build");

// create build folder if it doesn't exist
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// copy main.js into build folder
fs.copyFileSync(
  path.join(__dirname, "main.js"),
  path.join(buildDir, "main.js")
);

console.log("Build complete! Files are in the build/ folder.");
