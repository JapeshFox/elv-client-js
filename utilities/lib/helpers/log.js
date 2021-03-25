// --------------------------------------------
// log and debug helpers
// --------------------------------------------

const R = require("ramda");

// curried version of JSON.stringify with last two args pre-supplied
const jsonCurry = R.curry(JSON.stringify)(R.__, null, 2);

// output to console as indented JSON
// eslint-disable-next-line no-console
const dumpJson = R.pipe(jsonCurry, console.log);

// output object keys to console
// eslint-disable-next-line no-console
const dumpKeys = R.pipe(Object.keys, console.log);

// output horizontal line made of 30 repeats of char(s) to console
// eslint-disable-next-line no-console
const logLine = (char = "=") => console.log(char.repeat(30));

// logging for type: Result

const formattedInspect = (result) => result.inspect().split("\n").map((x) => x.trim()).join(" ");
// eslint-disable-next-line no-console
const dumpResult = R.pipe(formattedInspect, console.log);

module.exports = {
  dumpJson,
  dumpKeys,
  dumpResult,
  formattedInspect,
  jsonCurry,
  logLine
};