const numbers = [1, 2, 2, 5, 7, 9, 4, 3];

const findDuplicate = (values) => {
  let duplicate = [];
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i + 1] === values[i]) {
      duplicate.push(values[i]);
    }
  }
  console.log(`Duplicate: ${duplicate}`);
};

findDuplicate(numbers);

/* -------------------------------------------------- */

const findTheLargestNumber = (values) => {
  let largest = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > largest) {
      largest = values[i];
    }
  }
  console.log(`Largest Number: ${largest}`);
};

findTheLargestNumber(numbers);

/* -------------------------------------------------- */

const findSmallestNumber = (values) => {
  let smallest = values[0];
  for (let i = 0; i < values.length; i++) {
    if (smallest > values[i]) {
      smallest = values[i];
    }
  }
  console.log(`Smallest: ${smallest}`);
};

findSmallestNumber(numbers);

/* -------------------------------------------------- */

const reverseArray = (values) => {
  let reverse = [];
  for (let i = 0; i < values.length; i++) {
    reverse[i] = values[values.length - (i + 1)];
  }
  console.log(`Reverse Data: ${reverse}`);
};

reverseArray(numbers);

/* -------------------------------------------------- */

const name = "WennMark";

const reverseString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(`Reverse String: ${str}`);
};

reverseString(name);

const reverseString1 = (str) => {
  let reversed = " ";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(`Reverse String: ${reversed}`);
};

reverseString1(name);

/* -------------------------------------------------- */

const fibanocci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(`Fibanocci: ${fib}`);
};

fibanocci(5);

/* -------------------------------------------------- */

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  console.log(`Factorial: ${result}`);
};

factorial(5);

/* -------------------------------------------------- */

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 2) {
    if (n % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

console.log(`--------------------------------------------------`);

/* -------------------------------------------------- */

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

/* -------------------------------------------------- */

const wennworks = "wennmark";
const reversed1 = wennworks.split("").reverse().join("");
console.log(reversed1);

/* -------------------------------------------------- */

const mergeArray = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    first.push(second[i]);
  }
  console.log(`Merge Array: ${first}`);
};

mergeArray([1, 2, 3], [4, 5, 6]);

/* -------------------------------------------------- */

const spreadName = ["name", "name1", "name2"];
console.log(...spreadName);
