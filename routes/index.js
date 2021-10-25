const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// api routes

router.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data);
}
);
router.post("/api/notes", (req, res) => {
    const addNote = req.body;
    addNote.id = uuidv4();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    data.push(addNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.json(addNote);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            text_id: uuid()
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding Note!');
    }
});


module.exports = router;