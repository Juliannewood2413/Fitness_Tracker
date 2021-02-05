
const db = require('../models');
// const router = require('express').Router();

module.exports = function(app) {

//get last workout
app.get('/api/workouts', (req,res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    })
});

//create new workout
app.post('/api/workouts', async (req,res) => {
  try{
      const input = await db.Workout.create({ type: 'workout'})
      res.json(input);
  }
  catch(err){
      console.log("Couldn't add workout at this time", err)
  }
});

//update/add exercise type
app.put("/api/workouts/:id", ({body, params}, res) => {
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

app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err =>{
        res.json(err);
    })
})
}

// module.exports = app;



