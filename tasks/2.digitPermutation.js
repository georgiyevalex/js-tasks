/*
Given an array of non-negative integers,
group together numbers that can be obtained by rearranging the digits of each other,
ignoring leading zeros.
The solution should be as efficient as possible in terms of both time and memory.
*/

(
  () => {
    const digitPermutation = (arr) => {
      const result = {};

      arr.forEach( (element, index) => {
        const key = element.toString().split('').filter(item => item > 0).sort();
        let item = arr[index];

        if(result[key]) {
          result[key] = [...result[key], item];
        } else {
          result[key] = [item];
        }
      });

      return Object.values(result);
    };

    console.clear();
    console.log("start test");
    console.log(digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 9000009, 9]));
    // [[99, 9000009], [111, 101010], [1230, 2301, 123, 300021], [9]]
    console.log(digitPermutation([11, 22])); // [[11], [22]]
    console.log("end test");
  }
)();