const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const dataArray = data.trim().split('\n').map((row) => row.split(','));
      const students = dataArray.slice(1);
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

      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
