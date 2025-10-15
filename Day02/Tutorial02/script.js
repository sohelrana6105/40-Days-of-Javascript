let pName = "Sohel Rana";
let age = 24;
let isStudent = "student";
let favoriteProgramminglanguage = "Javasript";

console.log("name =", name, ", age = ", age, ", isStudent = ", isStudent);
console.log("favoriteProgramminglanguage =", favoriteProgramminglanguage);

let salary = 2000;
salary = 300;
console.log("salary", salary);

const task = " completed ";
// task = "Not completed";
/** we cannot reassign with const . It gives error if we try to reassign
 * Uncaught TypeError: Assignment to constant variable.
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

/**With onjects change the main value because its copy the reference not value because Non-primitive valuse copied reference  . That why although we assign student in new variable copystudent but it still point the same reference . what does it means if main objecs will change then all objects that are copy will change also*/

const skills = ["HTML", "CSS", "JavaScript", "React"];

// console.log("skills", skills);
const skillCop = skills;
skillCop[0] = "Next.js";

console.log("skillCop", skillCop);
console.log("skills", skills);

/**Array is smae to objects this is also Non-premitive value */
