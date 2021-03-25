// --------------------------------------------
// wait helpers
// --------------------------------------------

// use 'await seconds(n);' to pause program execution
const seconds = s => new Promise(resolve => setTimeout(resolve, Math.round(s * 1000.0)));

module.exports = {
  seconds
};