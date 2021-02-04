// const router = require('express').Router();
const path = require('path');

    // router.get('/exercise', (req,res) => {
    //     res.sendFile(path.join(__dirname, "/public/exercise.html"))
    // });

    // router.get('/stats', (req,res) => {
    //     res.sendFile(path.join(__dirname, "/public/stats.html"))
    // })

// module.exports = router;


module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"))
    })

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
}
