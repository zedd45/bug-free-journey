/**
 * designed to flatten a multi-dimensional array of ints into a flat array of ints
 *
 * @param {number[]|number} input - the array to transform
 * @param {number[]} [revisedArray=[]] - intended to be used internally by this function to retain the state of the array
 * @return {number[]} - a flattened array
 */
const flatten = (input, revisedArray = []) => {
  if (Array.isArray(input)) {
    return input.reduce((prev, current) => {
      if (Array.isArray(current)) {
        return flatten(current, revisedArray);
      }
      // push returns the length of the new array, so we must return the mutated array next
      revisedArray.push(current);
      return revisedArray;
    }, []);
  }
  return revisedArray;
};

module.exports = flatten;
