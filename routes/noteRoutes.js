const router = require('express').Router();
const { createNewNote } = require('../public/lib/notes');
let { notesArray } = require('../db/notes.json');

router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});


module.exports = router;