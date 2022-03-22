const express = require('express');
const app = express();

const notes = {
  1: {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  2: {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  },
  3: {
    content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
    id: 3
  },
  4: {
    content: 'A closure is formed when a function retains access to variables in its lexical scope.',
    id: 4
  }
};

// const nextId = 1;

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
