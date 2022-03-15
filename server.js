const express = require('express')
const mongoose = require('mongoose')
const app = express()
const ejs = require('ejs')
const port = 5000
const path = require('path');

app.set('view engine', 'ejs')

const url = 'mongodb+srv://coderazlan:Test01test@cluster0.tvvh4.mongodb.net/Teachers?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(console.log("MongoDB Connected"))
  .catch(err => console.log(err))

const database = require('./models/Database')

// app.get("/", (req, res) => res.render('index'));
// movies = unsernames
// movielist = userlist
// movie = database

app.get("/", (req, res) => {
  database.find({}, function(err, usernames) {
    res.render('index', {
      userlist: usernames
    })
  })
})


app.listen(process.env.PORT || port, () => console.log('Server is Running \n' + `Listening at http://localhost:${port}`));