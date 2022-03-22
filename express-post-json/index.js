const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }

  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade = {};
  grade.id = nextId;
  grade.name = req.body.name;
  grade.course = req.body.course;
  grade.score = req.body.score;

  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
