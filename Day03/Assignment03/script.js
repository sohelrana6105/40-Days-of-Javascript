console.log("Assignment 03");

/**1. Odd or Even?
 Take a number and find if the number is an odd or even number.
 Print the number and result in the console. **/

const num1 = 9;
const isEven = num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`;

console.log(isEven);

/**
 * 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

 Manage age as a variable.
 Check if the age is elligible for a driving license and print it on the console accordingly.
 */

const age = 17;
const isElligibleForDriving =
  age >= 18 ? "Eligible for Driving " : "Not eligible for driving ";
console.log(`Age is ${age} So  ${isElligibleForDriving}`);

/**
 * 3. Calculate CTC (cost to company) with a Bonus
Let's calculate how much you earn from your office.

 You get 12,300 rupees as your monthly salary.
 You get a 20% bonus on your annual salary.
 How much money do you make per annum as a CTC?
 */

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonusSalary = (annualSalary * 20) / 100;

const perAnuumCTC = annualSalary + bonusSalary;
console.log(`per annum as a CTC ${perAnuumCTC}`);

/**
 * 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

 Create a color variable.
 Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
 */

const color = "green";
const stopOrGo =
  color === "green" ? "Go" : color === "red" ? "stop" : "invalid color";
console.log(stopOrGo);

/**
 * 5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

 Create a units variable. Based on this value you will calculate the total electricity bill for a months.
 If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
 If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
 */

const costPerunits = 150;
const units = 55;
const monthlyBill = units * costPerunits;
const annualBill = monthlyBill * 12;
const discount = (annualBill * 20) / 100;

const withDiscountAnnualBill = annualBill - discount;
console.log(
  `annual payment with 20% discount will be ${withDiscountAnnualBill}`
);

/**
 * 6. Leap Year Checker
Is 2025 a Leap Year?

 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

 */

const year = 2025;
const IsleapYear =
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? ` ${year} is leap year `
    : `${year} is not leap year `;
console.log(IsleapYear);

/**
 * 7. Max of Three Numbers
Find the max number from the lot.

 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
 */

const p = 4;
const q = 5;
const r = 6;

const maxNumber1 = p > q ? p : q;
const maxNumber = maxNumber1 > r ? maxNumber1 : r;
console.log(maxNumber);

/**
 * 8. Bitwise Doubling
A tricky one for you

 Create a variable count and assign a value, say, 5.
 Now use the Bitwise shift operator to make the number double.
 Print it on the console.
 */

const count = 5;

console.log(count << 1);
