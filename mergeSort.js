function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const firstHalf = array.slice(0, array.length / 2);
  const secondHalf = array.slice(array.length / 2);

  mergeSort(firstHalf);
  mergeSort(secondHalf);
  merge(array, firstHalf, secondHalf);
}

function merge(array, firstHalf, secondHalf) {
  let firstIndex = 0;
  let secondIndex = 0;
  let arrayIndex = 0;

  while (firstIndex < firstHalf.length && secondIndex < secondHalf.length) {
    if (firstHalf[firstIndex] < secondHalf[secondIndex]) {
      array[arrayIndex] = firstHalf[firstIndex];
      firstIndex++;
    } else {
      array[arrayIndex] = secondHalf[secondIndex];
      secondIndex++;
    }
    arrayIndex++;
  }

  while (firstIndex < firstHalf.length) {
    array[arrayIndex] = firstHalf[firstIndex];
    arrayIndex++;
    firstIndex++;
  }

  while(secondIndex < secondHalf.length) {
    array[arrayIndex] = secondHalf[secondIndex]
    arrayIndex++
    secondIndex++;
  }
}

const array = [9, 10, 16, 1, 5];

mergeSort(array);

console.log(array);
