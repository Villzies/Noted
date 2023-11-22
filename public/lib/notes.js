const path = require("path");
const fs = require("fs");

let createNoteData = [];

app.get("/api/notes", function (err, res) {
    try {
      createNoteData = fs.readFileSync("db/db.json", "utf8");
      console.log("Hello from the SERVER!");
      createNoteData = JSON.parse(createNoteData);
    } catch (err) {
      console.log("\n error (catch err app.get):");
      console.log(err);
    }
    res.json(createNoteData);
  });

  app.post("/api/notes", function (req, res) {
    try {
      createNoteData = fs.readFileSync("./db/db.json", "utf8");
      console.log(createNoteData);
      createNoteData = JSON.parse(createNoteData);
      req.body.id = createNoteData.length;
      createNoteData.push(req.body);
      createNoteData = JSON.stringify(createNoteData);
      fs.writeFile("./db/db.json", createNoteData, "utf8", function (err) {
        if (err) throw err;
      });
  
      res.json(JSON.parse(createNoteData));
    } catch (err) {
      throw err;
    }
  });