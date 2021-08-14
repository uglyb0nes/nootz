const fs = require('fs');
const noteData = require('../db/db.json');
const uniqid = require('uniqid');
const db = 'db/db.json';

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let db = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(db);
    });

    app.post('/api/notes', (req, res) => {
        let notes = JSON.parse(fs.readFileSync('db/db.json'));
        res.json(notes);

        const newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        notes.push(newNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(notes);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const {id} = req.params;
        let notes = fs.readFileSync(db)
        notes = JSON.parse(notes);
        let indexToDelete = notes.filter((each) => each.id !=id);

        if(!indexToDelete) {
            return res.status(404).json({error: 'note does not exist'});
        }

        fs.writeFileSync(db, JSON.stringify(indexToDelete));
            res.send(db, indexToDelete);
        });
};