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
  console.log(str);
};

reverseString(`Reverse String: ${name}`);

const reverseString1 = (str) => {
  let reversed = " ";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(reversed);
};

reverseString1(`Reverse String: ${name}`);
