function fibsRec(number) {
  if (number === 1) {
    return [0];
  }
  if (number === 2) {
    return [0, 1];
  }

  const prevNum = fibsRec(number - 1);
  const lastNum = prevNum[prevNum.length - 1];
  const secondToLastNum = prevNum[prevNum.length - 2];
  return prevNum.concat(lastNum + secondToLastNum);
}

console.log(`fibsRef(8): ${fibsRec(8)}`);
