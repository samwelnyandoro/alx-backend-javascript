const express = require('express');
const fs = require('fs');

const port = 1245;
const hostname = '127.0.0.1';
const { argv } = process;
const filePath = argv[2];
const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const dataArray = data.trim().split('\n').map((row) => row.split(','));
      const students = dataArray.slice(1);
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

      const output = [`Number of students: ${students.length}`];
      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        output.push(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
      }
      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  countStudents(filePath)
    .then((output) => {
      res.end(output);
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

app.listen(port, hostname);

module.exports = app;
