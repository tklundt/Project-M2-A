// function greetTheStudent(studentName){ // parameter and named function
//     return `Hello there ${studentName}`;
// }

// const greetTheStudent = function (studentName) { // parameter and anonymous function
//     return `Hello there ${studentName}`;

//}

//Fat Arrow Function
// const greetTheStudent = (studentName)=> {// parameter and anonymous function
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = studentName => `Hello there ${studentName}`;

// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

// const fullName = (firstName, middleName, lastName) => {
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;

// const student = 'Mary Jane';
// const greet = greetTheStudent(student); // Argument
// console.log(greet);

const titleName = fullName ('Mary', 'R', 'Jane');
console.log(titleName);

