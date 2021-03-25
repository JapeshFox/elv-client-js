// --------------------------------------------
// time helpers
// --------------------------------------------

const moment = require("moment");

const {padStart} = require("./string");

// Converts seconds to right-aligned string in "##d ##h ##m ##s " format
// Unneeded larger units are omitted, e.g.
//
// etaString(0)      == "             0s"
// etaString(1)      == "             1s"
// etaString(61)     == "         1m 01s"
// etaString(3661)   == "     1h 01m 01s"
// etaString(90061)  == " 1d 01h 01m 01s"
// etaString(954061) == "11d 01h 01m 01s"

const etaString = seconds => {
  const unixTimestamp = moment.unix(seconds).utc();
  let dataStarted = false;
  let pieces = [];

  const days = Math.trunc(seconds / 86400);
  if(days > 0) dataStarted = true;
  pieces.push(dataStarted ? days.toString() + "d" : "");

  const hoursString = unixTimestamp.format(dataStarted ? "HH\\h" : "H\\h");
  dataStarted = dataStarted || hoursString !== "0h";
  pieces.push(dataStarted ? hoursString : "");

  const minutesString = unixTimestamp.format(dataStarted ? "mm\\m" : "m\\m");
  dataStarted = dataStarted || minutesString !== "0m";
  pieces.push(dataStarted ? minutesString : "");

  const secondsString = unixTimestamp.format(dataStarted ? "ss\\s" : "s\\s");
  pieces.push(secondsString);
  return pieces.map(padStart(3)).join(" ");
};

module.exports = {
  etaString
};