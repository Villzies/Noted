const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/apiroutes.js')
const PORT = 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
})

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// GET Route for notes page
app.get('api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
