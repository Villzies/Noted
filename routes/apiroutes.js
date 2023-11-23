const router = require('express').Router();
const fs = require("fs");
const util = require("util")
const readFromFile = util.promisify(fs.readFile)
router.get("/notes", function (err, res) {
    try {
      return readFromFile("db/db.json", "utf8").then((data) => JSON.parse(data)).then((data) => res.json(data));
    } catch (err) {
      console.log("\n error (catch err router.get):");
      console.log(err);
    }
  });

  router.post("/notes", function (req, res) {
    try {
      let createNoteData = fs.readFileSync("./db/db.json", "utf8");
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

module.exports = router;