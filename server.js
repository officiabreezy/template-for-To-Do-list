const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//app.use(bodyParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let tasks = [];

app.get('/', function(req, res) {
    res.render('index', {tasks: tasks});

    console.log('task added');
});

app.post('/add', function(req, res) {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.redirect('/');
});

app.listen(8000, function () {
    console.log('listening on http://localhost:8000');
});