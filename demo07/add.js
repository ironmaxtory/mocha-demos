
function add (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return NaN;
  }
}

module.exports = {
  add: add
};
