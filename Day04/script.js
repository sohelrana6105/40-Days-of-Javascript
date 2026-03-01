// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

console.log(
  `switch recieve a value and match the case like (day === case ) . === check value and type both . that why Monday and monday is not same `
);

/**
 *2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
 */

const amount = 600;

if (amount % 100 === 0) {
  console.log(` The amount ${amount} Withdrawal successful`);
} else {
  console.log(` Invalid amount`);
}

/**
 * 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -,* , /, %) as input, and performs the operation on two numbers. Print the output on the console.
 */

const num1 = 4;
const num2 = 3;
const operation = "*";

switch (operation) {
  case "+":
    const result = num1 + num2;
    console.log(result);
    break;
  case "-":
    const result3 = num1 - num2;
    console.log(result3);
    break;
  case "*":
    const result7 = num1 * num2;
    console.log(result7);
    break;

  case "/":
    const result4 = num1 / num2;
    console.log(result4);
    break;
  case "%":
    const result5 = num1 % num2;
    console.log(result5);
    break;

  default:
    break;
}

/**
 * 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
 */

let age = 30;
if (age < 18) {
  console.log("Children ticket price $3");
} else if (age >= 18 && age <= 60) {
  console.log("Adults ticket price $10");
} else if (age > 60) {
  console.log("Seniorsts ticket price $8");
}

/**
 * 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
 */

const birthMonth = "february";

switch (birthMonth.toLowerCase()) {
  case "january":
    console.log("Aquarius");
    break;
  case "february":
    console.log("Pisces");
    break;
  case "march":
    console.log("Aries");
    break;
  case "april":
    console.log("Taurus");
    break;
  case "may":
    console.log("Gemini");
    break;
  case "june":
    console.log("cancer");
    break;
  case "july":
    console.log("Leo");
    break;
  case "August":
    console.log("Virgo");
  case "September":
    console.log("Libra");
    break;
  case "October":
    console.log("Scorpio");
    break;
  case "November":
    console.log("Capricorn");
    break;
  case "December":
    console.log("Capricorn");
    break;

  default:
    break;
}

/***
 * 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

*/

let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1 === side2 && side1 === side3 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Isosceles Triangle.");
} else if (side1 !== side2 || side1 !== side3 || side2 !== side3) {
  console.log("Scalene Triangle.");
}
