// --------------------------------------------
// file and path helpers
// --------------------------------------------

const fs = require("fs");
const path = require("path");

const absPath = (pathStr, workingDir) => path.isAbsolute(pathStr)
  ? pathStr
  : path.isAbsolute(workingDir)
    ? path.resolve(workingDir, pathStr)
    : path.resolve(path.resolve(workingDir), pathStr);

const readFile = (filePath, cwd = ".", logger) => {
  const fullPath = absPath(filePath, cwd);
  if(logger) logger.log(`Reading file ${fullPath}...`);
  return fs.readFileSync(fullPath);
};

// if string starts with '@', interpret as path and read, else return string
const stringOrFileContents = (str, cwd = ".", logger) => str.startsWith("@")
  ? readFile(str.substring(1), cwd, logger)
  : str;


module.exports = {
  absPath,
  readFile,
  stringOrFileContents
};