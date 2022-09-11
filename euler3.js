function largestPrimeFactor(number) {
  if (
    (number % 2 !== 0) |
    (number % 3 !== 0) |
    (number % 4 !== 0) |
    (number % 5 !== 0)
  ) {
    return number;
  }

  return largestPrimeFactor(number - 1);
}

console.log(largestPrimeFactor(13195));
