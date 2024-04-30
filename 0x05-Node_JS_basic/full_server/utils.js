const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);

      const dataArray = data.trim().split('\n').map((row) => row.split(','));
      const students = dataArray.slice(1);
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });
      resolve(fields);
    });
  });
}

module.exports = readDatabase;

// readDatabase('../database.csv').then((output) => console.log(output));

