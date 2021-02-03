const router = require('express').Router();
const app = require('express');
const path = require('path');

    router.get('/exercise', (req,res) => {
        res.sendFile(path.join(__dirname, "/exercise.html"))
    });

    router.get('/stats', (req,res) => {
        res.sendFile(path.join(__dirname, "/stats.html"))
    })

module.exports = app;

