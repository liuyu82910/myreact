const sq = x => x*x;
console.log(sq(5));

const arr1 = [2,3,5,7,9,10]
const arr2 = arr1.map(item => Math.pow(item, 2));
console.log(arr2);

const arr3 = arr1.filter(i => i*2 > 10);
console.log(arr3);