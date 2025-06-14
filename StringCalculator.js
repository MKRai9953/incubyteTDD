function add(numbers) {
  if (!numbers.trim()) return 0;

  let numberString = numbers;
  let delimiterPattern = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterEndIndex);
    numberString = numbers.slice(delimiterEndIndex + 1);

    const multipleDelimiters = delimiterSection.match(/\[([^\]]+)\]/g);

    if (multipleDelimiters) {
      const escapedDelimiters = multipleDelimiters.map((d) =>
        d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      delimiterPattern = new RegExp(escapedDelimiters.join("|"));
    } else {
      delimiterPattern = new RegExp(
        delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    }
  }

  const nums = numberString
    .split(delimiterPattern)
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n) && n <= 1000);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
