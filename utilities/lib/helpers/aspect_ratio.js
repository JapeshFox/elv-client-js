// --------------------------------------------
// aspect ratio helpers
// --------------------------------------------

const Fraction = require("fraction.js");

// Returns integer width for a given height and aspect ratio
//
// ratio can be anything that fraction.js will accept,
// but most common case is to pass in a fraction as a string, e.g. "16/9"
const widthForRatioAndHeight = (ratio, h) => Fraction(ratio).mul(h).round(0).valueOf();

module.exports = {
  widthForRatioAndHeight
};