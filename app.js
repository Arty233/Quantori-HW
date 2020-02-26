const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

let Solve = require('./solver');


app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(`I'm working!`);
});

app.post('/', [
    check('a').exists().isNumeric().toFloat(),
    check('b').exists().isNumeric().toFloat(),
    check('c').exists().isNumeric().toFloat()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const eqv = {
        a: req.body.a,
        b: req.body.b,
        c: req.body.c
    }
    res.json(Solve(eqv.a, eqv.b, eqv.c));

});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});