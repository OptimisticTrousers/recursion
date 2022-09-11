//Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
//Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
//Now write another method fibsRec which solves the same problem recursively.
//This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibs(number) {
  if (number === 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  }
  const output = [0, 1];
  for (let i = 1; i < number - 1; i++) {
    output.push(output[i] + output[i - 1]);
  }
  return output;
}

console.log(`fibs(8): ${fibs(8)}`);
