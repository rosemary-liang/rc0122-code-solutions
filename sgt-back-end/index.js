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

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

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

  const params = [gradeId, grade.course, grade.name, grade.score];

  const sql = `
  update "grades"
  set "course" = $2,
      "name"  = $3,
      "score" = $4
  where "gradeId" = $1
  returning * `;

  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({ error: 'gradeId does not exist' });
      } else {
        res.json(updatedGrade);
      }
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred' });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  const params = [gradeId];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ error: 'gradeId does not exist' });
      } else {
        res.status(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred' });
    })
  ;

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
