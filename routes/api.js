const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// api routes
router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data);
});
router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    data.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.json(newNote);
   
});


router.delete("/notes/:id", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      let noteId = req.params.id;
      let note = JSON.parse(data);
      note = note.filter((note) => {
          if (noteId != note.id) {
            return true;
          } else {
            return false;
          };
      }); 
      fs.writeFile("db/db.json", JSON.stringify(note), (err) => {
        if (err)
        throw err;
        // confirmation
        res.send(console.log("Deleted Successfully"));
      })
    });

  });



module.exports = router;