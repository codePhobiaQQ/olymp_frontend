const fs = require("fs");
const path = require("path");

function traverseFiles(dir, fileCallback) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    const isNodeModules = path.basename(filePath) === "node_modules";
    if (isNodeModules) {
      return;
    }

    if (fileStat.isDirectory()) {
      traverseFiles(filePath, fileCallback);
    } else if (
      fileStat.isFile() &&
      (path.extname(file) === ".tsx" || path.extname(file) === ".ts")
    ) {
      fileCallback(filePath);
    }
  });
}

module.exports = {
  traverseFiles,
};
