// --------------------------------------------
// functional programming helpers
// --------------------------------------------

const R = require("ramda");

const Result = require("crocks/Result");
const {Err, Ok} = Result;
const curry = require("crocks/helpers/curry");

const {dumpJson} = require("./log");


const identity = x => x;

// unwrap a Result object
const join = x => x.either(identity, identity);

// Accumulate an array of unwrapped objects, return Ok(array) or Err(error)
// Returns Err(error) if accumulator is already an Err object or if kvPair value is an Err object
const objUnwrapReducer = (rAccPairs, kvPair) => {
  return join(rAccPairs.map(
    (accPairs) => {
      const [key, rVal] = kvPair;
      return rVal.either(
        (e) => Err(e),
        (val) => Ok([...accPairs, [key, val]])
      );
    }
  ));
};

// take flat object where each value is a Result, return new object with same keys but each Result unwrapped
const objUnwrapValues = obj => R.toPairs(obj).reduce(objUnwrapReducer, Ok([])).map(R.fromPairs);

// convenience function to construct a single-attribute object {key: value}
const singleEntryMap = curry((key, value) => Object({[key]: value}));

// composable function to output intermediate results as JSON (to help with debugging function chains)
const tapJson = R.tap(dumpJson);

// wrap error throw in a function to allow composition
const throwError = message => {
  throw Error(message);
};

// returns fixed singleton value
const unit = () => true;

// unwrap a Result object and throw an error if it contains Err object, else return an Ok object
const valOrThrow = result => result.either(throwError, identity);

module.exports = {
  identity,
  join,
  objUnwrapValues,
  singleEntryMap,
  tapJson,
  throwError,
  unit,
  valOrThrow
};