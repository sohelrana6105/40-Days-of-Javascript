/** */

/**
1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
 */
const calsiusNumber = 75;

function fahrenheitToCelcius(Celsius) {
  const fahrenhit = (Celsius * 9) / 5 + 32;

  return fahrenhit;
}
const farenthitResult = fahrenheitToCelcius(calsiusNumber);
console.log("farenthitResult", farenthitResult);

/**
2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
 */

function findMax(num1, num2) {
  const maxNumber = num1 > num2 ? num1 : num2;
  return maxNumber;
}
const resultMax = findMax(5, 8);
console.log("resultMax", resultMax);

/**
3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far. 
 */
function isPalindrome(str) {
  const strLowerCase = str.toLocaleLowerCase();

  let reverseString = "";
  for (
    let initialValue = strLowerCase.length - 1;
    initialValue <= strLowerCase.length && initialValue >= 0;
    initialValue--
  ) {
    reverseString = reverseString + strLowerCase.charAt(initialValue);
  }
  const result =
    reverseString === strLowerCase
      ? `${strLowerCase} is palindrom `
      : `${strLowerCase} is not  palindrom `;
  return result;
}

const isPalindromeResult = isPalindrome("civic");
console.log(isPalindromeResult);

/**
  4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
 */

function factorial(value) {
  let factorial = 1;

  for (let fValue = value; 0 < fValue; fValue--) {
    factorial = factorial * fValue;
  }
  return factorial;
}
const factorialResult = factorial(5);

console.log("factorialResult", factorialResult);

/**
 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
 */

function countVowels(str) {
  let numberOfVowel = 0;
  const strLowerCase = str.toLocaleLowerCase();

  for (
    let value = strLowerCase.length - 1;
    value < strLowerCase.length && value >= 0;
    value--
  ) {
    switch (strLowerCase.charAt(value)) {
      case "a":
        numberOfVowel += 1;
        break;
      case "e":
        numberOfVowel += 1;
        break;
      case "i":
        numberOfVowel += 1;
        break;
      case "o":
        numberOfVowel += 1;
        break;
      case "u":
        numberOfVowel += 1;
        break;

      default:
        break;
    }
  }

  return numberOfVowel;
}

const countVowelsResult = countVowels("apple");

console.log("countVowelsResult", countVowelsResult);

/**
 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase. 
 */

/**
 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
 */
(function () {
  console.log("Hello, JavaScript!");
})();

/**
 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
 */
function greet(name, callback) {
  return callback(name);
}

const greetResult = greet("sohel", function (newName) {
  return `I am ${newName}`;
});
console.log("greetResult", greetResult);

/**
 9. Create Call Stack Execution Diagram for this flow
 */

// in side the readme file I have shown

/**
 9. Create Call Stack Execution Diagram for this flow
 */

// in side the readme file I have shown
