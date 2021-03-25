// --------------------------------------------
// sort helpers
// --------------------------------------------

const compare = (a, b) => {
  return a < b
    ? -1
    : a > b
      ? 1
      : 0;
};

module.exports = {
  compare
};