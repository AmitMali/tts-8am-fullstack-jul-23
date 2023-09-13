function add(...rest) {
  return rest.reduce((total, current) => {
    return total + current;
  });
}
// console.log(add(10, 20, 23, 4, 56, 56, 77, 8));

const nums1 = [2, 3, 45, 67];
const nums2 = [...nums1, 3, 6677, 886, 565, 3];
// console.log(nums2);

const [n1, n2, n3] = nums2;

console.log(n1, n2, n3);

const fooarray = [1, 2, 3, [4, 5, 6], 34, 6, 7];
console.log(fooarray);
console.log(fooarray.flat().reduce((total, current) => total + current));
