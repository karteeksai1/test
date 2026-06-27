function sum(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  return arr.reduce((acc, val) => acc + val, 0);
}

function average(arr) {
  if (!arr.length) return 0;
  return sum(arr) / arr.length;
}

module.exports = {
  sum,
  average,
};
