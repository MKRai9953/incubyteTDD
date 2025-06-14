function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterLine = numbers.slice(2, delimiterSectionEnd);
    numberString = numbers.slice(delimiterSectionEnd + 1);

    const delimiterMatches = delimiterLine.match(/\[([^\]]+)\]/g);

    if (delimiterMatches) {
      const delimiters = delimiterMatches.map((d) =>
        d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      delimiter = new RegExp(delimiters.join("|"));
    } else {
      delimiter = new RegExp(
        delimiterLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    }
  }

  const tokens = numberString.split(delimiter);
  const nums = tokens.map((n) => parseInt(n, 10)).filter((n) => !isNaN(n));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
