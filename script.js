function multiplyBy(arr, num) {
  return arr.map((element) => element * num);
}

console.log(multiplyBy([1, 2, 3], 2)); // Output: [2, 4, 6]
console.log(multiplyBy([1, 1, 1, 1, 1], 10)); // Output: [10, 10, 10, 10, 10]
