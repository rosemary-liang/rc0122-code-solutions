const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

const notes = data.notes;
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

app.post('/api/notes', (req, res) => {
  if (!(req.body.content)) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = req.body;
    const id = data.nextId;
    newNote.id = id;
    notes[id] = newNote;
    data.nextId++;

    const newData = JSON.stringify(data, null, 2);

    fs.writeFile('./data.json', newData, 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
