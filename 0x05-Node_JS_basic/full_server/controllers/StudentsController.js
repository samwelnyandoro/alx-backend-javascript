/* eslint-disable consistent-return */
const readDatabase = require('../utils');

const filePath = process.argv[2];

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(filePath);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        const students = fields[field];
        const numStudents = students.length;
        const studentList = students.join(', ');
        output += `Number of students in ${field}: ${numStudents}. List: ${studentList}\n`;
      });

      res.status(200).send(output);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fields = await readDatabase(filePath);
      const students = fields[major] || [];
      const studentList = students.join(', ');
      const output = `List: ${studentList}`;

      res.status(200).send(output);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
