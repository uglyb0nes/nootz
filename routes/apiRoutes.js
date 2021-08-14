const fs = require('fs');
const noot = require('../db/db.json');
const uniqid = require('uniqid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let db = JSON.parse(fs.readFileSync('./db/db.json'));
        res.JSON(db);
    });

    app.post('/api/notes', (req, res) => {
        let nootz = JSON.parse(fs.readFileSync('db/db.json'));
        res.JSON(nootz);

        const newt = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        nootz.push(newt);
        fs.writeFileSync('./db/db.json', JSON.stringify(nootz));
        res.JSON(nootz);
    });
};