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

module.exports = router;