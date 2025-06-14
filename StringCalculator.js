function add(numbers = "") {
  if (numbers === "") return 0;

  const tokens = numbers.split(/,|\n/).map((n) => parseInt(n, 10));

  return tokens.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
