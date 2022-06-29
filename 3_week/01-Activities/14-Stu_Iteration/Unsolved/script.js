//WRITE YOUR CODE BELOW


// As a member of the class, I want to store a list of my classmates and use that list to create a greeting for each student on the list.

// todo It's done when the names of five classmates are stored in a single variable named students.
const students = ['john', 'sally', 'gretta', 'luther', 'bobby'];

// todo It's done when the total number of elements in the students array is logged to the console.
console.log(`Total number of students = ${students.length}.`)

// todo It's done when, using a for loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the students array.
for (let i = 0; i < students.length; i++) {
  console.log(`Great to see you, ${students[i].charAt(0).toUpperCase()}${students[i].slice(1)}!`)
}