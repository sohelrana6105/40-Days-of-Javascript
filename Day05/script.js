// Task 1

// Generate a Pyramid Pattern using Nested Loop as it is shown below:
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

for (let pyramidCount = 1; pyramidCount <= 6; pyramidCount++) {
  //   console.log(countNumber);
  let pyramidStar = "";
  for (let countStar = 1; countStar <= pyramidCount; countStar++) {
    pyramidStar += "*";
  }
  console.log(pyramidStar);
}

//Task 2
//2. Craete Multiplication Table (Using for loop)
/**
Write a program to print the multiplication table of a given number up to 10. For Example: If N = 3, output should be:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
 
 */
const givenNumber = 3;

for (
  let multiplicationNumber = 1;
  multiplicationNumber <= 10;
  multiplicationNumber++
) {
  const multiplication = givenNumber * multiplicationNumber;
  const multiplicationTable = `${givenNumber} * ${multiplicationNumber} = ${multiplication}`;
  console.log(multiplicationTable);
}
//task 3
//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let summationOfOdd = 0;

for (
  let numberForSummation = 1;
  numberForSummation <= 500;
  numberForSummation++
) {
  if (numberForSummation % 2 === 1) {
    summationOfOdd += numberForSummation;
  }
}
console.log("summationOfOdd ---1 to 500", summationOfOdd);

//task 4
//4. Skipping Multiples of 3
//Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (let number = 1; number <= 20; number++) {
  if (number % 3 === 0) {
    console.log(number);
  }
}

//task 5
//5. Reverse Digits of a Number (Using while loop)
/**
 Write a program to reverse the digits of a given number using a while loop.
Example:
Input: 6789
Output: 9876
 */
const inputNumber = 6789;
let inputNumberAsString = inputNumber.toString();
let reverseInputNumberAsString = "";

let numberOfIterationOFInput = inputNumberAsString.length - 1;
while (
  numberOfIterationOFInput <= inputNumberAsString.length &&
  numberOfIterationOFInput >= 0
) {
  reverseInputNumberAsString += `${inputNumberAsString.charAt(numberOfIterationOFInput)}`;
  numberOfIterationOFInput--;
}

console.log("reverseInputNumberAsString ------", reverseInputNumberAsString);
