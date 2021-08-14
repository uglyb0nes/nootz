const fs = require('fs');
const note = require('../db/db.json');
const uniqid = require('uniqid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let db = JSON.parse(fs.readFileSync('./db/db.json'));
        res.JSON(db);
    });

    app.post('/api/notes', (req, res) => {
        let notes = JSON.parse(fs.readFileSync('db/db.json'));
        res.JSON(notes);

        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        nootz.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.JSON(notes);
    });
};