const express = require('express')
const db = require('../models/models');
const router = require('express').Router();

module.exports = function(app) {

//get last workout
router.get('/api/workouts', (req,res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    })
});

//create new workout
router.post('/api/workouts', (req,res) => {
    //add post to workouts code here
});

//update/add exercise type
router.put("/api/workouts/:id", ({body, params}, res) => {
    const exerciseId = params.id;
    let addedExercises = [];

    db.Workout.find({_id: exerciseId})
    .then(dbWorkout => {
        addedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body];
        updateWorkout(allExercises);
    });

    function updateWorkout(exercises){
        db.Workout.findByIdAndUpdate(exerciseId, {exercises: exercises}, function(err, doc) {
            if(err){
                console.log(err)
            }
        });
    }
});

//workout range






}