const mongoose = require('mongoose');
const logger = require('morgan');
const express = require('express');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, 
useFindAndModify: false
});

//routes
app.use(require('./routes/api-routes.js'))
app.use(require('./routes/html-routes.js'))

app.listen(PORT, () =>{
    console.log(`App listening on http://localhost:${PORT}`);
})

module.exports = app;

