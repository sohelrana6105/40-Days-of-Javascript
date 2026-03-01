/**
 * ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
 */
let pName = "Sohel Rana";
let age = 24;
let isStudent = true;
let favoriteProgramminglanguage = "Javasript";
/**
 * ✅ Task 2: Print the values to the console.
 */
console.log("name =", pName, ", age = ", age, ", isStudent = ", isStudent);
console.log("favoriteProgramminglanguage =", favoriteProgramminglanguage);

/**
 * ✅ Task 3: Try reassigning values to let and const variables and observe errors.
 */

let salary = 2000;
salary = 300;
console.log("salary", salary);

const task = " completed ";
// task = "Not completed";
/** we cannot reassign with const . It gives error if we try to reassign
 * Uncaught TypeError: Assignment to constant variable.
 */

/**
 * ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
 */

const student = {
  id: 101,
  name: "Sohel Rana",
  age: 23,
  department: "Political Science",
  isGraduated: false,
};
const copyStudentInfo = student;
copyStudentInfo.age = 24;
console.log("copyStudentInfo", copyStudentInfo);
console.log("student", student);

/**
 * Observation :
   Objects are non-primitive values. In JavaScript, objects are stored in heap memory and variables hold a reference to that memory location. When we assign the student object to copyStudentInfo, both variables point to the same reference in memory. So modifying one will affect the other.
 */

const skills = ["HTML", "CSS", "JavaScript", "React"];

// console.log("skills", skills);
const skillCop = skills;
skillCop[0] = "Next.js";

console.log("skillCop", skillCop);
console.log("skills", skills);

/**Array is also non-primmitve value . if we change one it will affect the others also  .  */
