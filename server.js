const mongoose = require('mongoose');
const logger = require('morgan');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, 
useFindAndModify: false
});

//routes
// app.use(require('./routes/api-routes.js'))
// app.use(require('./routes/html-routes.js'))
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//models
// const db = require('./models/models.js')

app.listen(PORT, () =>{
    console.log(`App listening on http://localhost:${PORT}`);
})

module.exports = app;

