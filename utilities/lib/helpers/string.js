const curry = require("crocks/helpers/curry");
const ellipsize = require("ellipsize");
const kindOf = require("kind-of");
const R = require("ramda");

// --------------------------------------------
// string helpers
// --------------------------------------------

// convert camelCase to kebab-case
const camel2kebab = s => {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, "$1-$2")
    .toLowerCase();
};

// construct a descriptor to use in log messages
const fabricItemDesc = ({objectId, versionHash, writeToken}) => writeToken
  ? `draft ${writeToken}`
  : versionHash
    ? `version ${versionHash}`
    : objectId
      ? `object ${objectId}`
      : throwError("fabricItemDesc(): no objectId, versionHash, or writeToken");

const padStart = width => str => str.padStart(width);

const removeLeadingSlash = str => str.replace(/^\//, "");

const removeTrailingSlash = str => str.replace(/\/$/, "");

// return item with a space after, if it exists, else empty string
const spaceAfter = x => x ? `${x} ` : "";

// string template replacement
const subst = curry(
  (substitutions, stringTemplate) =>
    stringTemplate.replace(
      substNamedArgs,
      (match, substName) => substitutions.hasOwnProperty(substName) ? substitutions[substName] : ""
    )
);
const substNamedArgs = /{([0-9a-zA-Z_]+)}/g;

// prevent 'null' and 'undefined' from getting put into strings
const suppressNullLike = x => kindOf(x) === "null" || kindOf(x) === "undefined"
  ? ""
  : x;

const trimSlashes = R.compose(removeLeadingSlash, removeTrailingSlash);

module.exports = {
  camel2kebab,
  ellipsize,
  fabricItemDesc,
  padStart,
  removeLeadingSlash,
  removeTrailingSlash,
  spaceAfter,
  subst,
  suppressNullLike,
  trimSlashes
};