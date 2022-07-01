// WRITE YOUR CODE HERE
// TODO: As an instructor, I want to create a list of student names and be able to add and rename names.
const studentNames = ['john', 'bob', 'sally', 'sarah', 'jennifer'];

// TODO It's done when the total number of elements in the array is logged to the console.
console.log('number of students =', studentNames.length);
console.log('');
console.log('--------------------')

// TODO It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`Welcome to the class ${studentNames[i].charAt(0).toUpperCase()}${studentNames[i].slice(1)}`)
}
// console.log('number of students =', studentNames.length);
console.log('');
console.log('--------------------')

// TODO It's done when the first element in the array is replaced with the name of a new student.
console.log('0ld array = ', studentNames);

let priorStudentName = studentNames[0];

studentNames[0] = 'bart';

let currentStudentName = studentNames[0];
console.log('Updated array = ', studentNames);

console.log('');
console.log('--------------------')
// TODO It's done when, after an if statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.
if (priorStudentName === currentStudentName) {
  console.log(`${priorStudentName} === ${currentStudentName}`)
  console.log(`${currentStudentName} is still in class`);
} else {
  console.log(`${priorStudentName} !== ${currentStudentName}`);
  console.log(`${currentStudentName} replaced ${priorStudentName} in class`);
}

// playing around
console.log('');
console.log('--------------------')

console.log(studentNames.toString());
console.log(studentNames.toLocaleString());
console.log(studentNames.values());
console.log(studentNames.join(''));
console.log(studentNames.sort());
console.log(studentNames.reverse());
console.log(studentNames.keys());

// Using for with two iterating variables
// You can create two counters that are updated simultaneously in a for loop using the comma operator.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4