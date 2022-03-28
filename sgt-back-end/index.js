const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"`;
  db.query(sql)
    .then(result => {
      const gradesArray = result.rows;
      res.json(gradesArray);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!grade.course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  }
  if (!grade.name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  }
  if (!grade.score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  }
  if (grade.score < 0 || grade.score > 100 || !Number.isInteger(grade.score)) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100' });
    return;
  }

  const params = [
    grade.course,
    grade.name,
    grade.score
  ];

  const sql = `
  insert into "grades" ("course", "name", "score")
  values ($1, $2, $3)
  returning *;
  `;

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred' });
    });

});

// app.put('/api/grades/:gradeId', (req, res) => {
//   const id = Number(req.params.gradeId);

// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
