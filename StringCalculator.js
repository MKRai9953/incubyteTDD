function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const [delimiterLine, ...rest] = numbers.split("\n");
    const customDelimiter = delimiterLine.slice(2); //
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    numberString = rest.join("\n");
  }

  const tokens = numberString.split(delimiter).map((n) => parseInt(n, 10));
  const nums = tokens.map((n) => parseInt(n, 10)).filter((n) => !isNaN(n));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return tokens.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
