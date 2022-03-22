const express = require('express');
const data = require('./data.json');
const app = express();

const notes = data;

app.use(express.json());

const makeNotesArray = () => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  return notesArray;
};

app.get('/api/notes', (req, res) => {
  const notesArray = makeNotesArray();
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!(Number.isInteger(id) && id > 0)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(notes[id]);
  }
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
