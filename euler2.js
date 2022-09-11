function evenFibonacci(number) {
  if (number === 1) {
    return [1];
  } else if (number === 2) {
    return [1, 2];
  }

  const prevNum = evenFibonacci(number - 1);
  const lastNum = prevNum[prevNum.length - 1];
  const secondToLastNum = prevNum[prevNum.length - 2];
  return prevNum.concat(lastNum + secondToLastNum);
}

console.log(evenFibonacci(6));
