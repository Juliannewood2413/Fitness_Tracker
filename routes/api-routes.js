
const db = require('../models');
// const router = require('express').Router();

module.exports = function(app) {

//get last workout
app.get('/api/workouts', (req,res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

//create new workout
app.post('/api/workouts', (req,res) => {
  db.Workout.create(req.body)
  .then((dbWorkout) => {
      res.json(dbWorkout);
  }).catch(err => {
      res.status(400).json(err)
  })
});

//update/add exercise type
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});


// app.put("/api/workouts/:id", ({body, params}, res) => { 
//     console.log(body, params)
//     const exerciseId = params.id;
//     let addedExercises = [];

//     db.Workout.findById({_id: exerciseId})
//     .then(dbWorkout => {
//         addedExercises = dbWorkout[0].exercises;
//         res.json(dbWorkout[0].exercises);
//         let allExercises = [...addedExercises, body];
//         updateWorkout(allExercises);
//     });

//     function updateWorkout(exercises){
//         db.Workout.findByIdAndUpdate(exerciseId, {exercises: exercises}, function(err, doc) {
//             if(err){
//                 console.log(err)
//             }
//         });
//     }
// });

app.get('/api/workouts/range', ({}, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
})
}

// module.exports = app;



