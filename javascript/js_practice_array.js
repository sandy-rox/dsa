let arr = [1, 2, 3, [4, 5, [6]]];
console.log(Array.isArray(arr));

console.log(arr.flat())
console.log(arr.flat(1))
console.log(arr.flat(Infinity))

arr.splice(1, 0, 99);
console.log(arr)
console.log(arr.splice(1, 1, 2));
console.log(arr)

console.log(arr.concat([9, 10]));
console.log(arr.copyWithin(0, 3, 5));
console.log(arr.flat(Infinity).every((item) => item < 11))
console.log(arr.flat(Infinity).every((item) => item < 6))

console.log(arr.flat(Infinity).filter((item) => item < 6))

console.log(arr.fill(0));
