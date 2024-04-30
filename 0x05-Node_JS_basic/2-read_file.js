/* eslint-disable guard-for-in */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataArray = data.trim().split('\n').map((row) => row.split(','));
    console.log(dataArray);
    const students = dataArray.slice(1);
    console.log(students);
    console.log(`Number of students: ${students.length}`);

    const fields = {}; // stores the count and list
    students.forEach((student) => {
      const field = student[3]; // Gets the fields of the student
      if (!fields[field]) {
        fields[field] = {
          count: 0,
          names: [],
        };
      }
      fields[field].count += 1;
      fields[field].names.push(student[0]);
    });

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
