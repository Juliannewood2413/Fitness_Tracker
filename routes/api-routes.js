
const db = require('../models');

module.exports = function(app) {

//get last workout
app.get('/api/workouts', (req,res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

//create new workout
app.post('/api/workouts/', (req,res) => {
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

app.get('/api/workouts/range', ({}, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
})
}

// module.exports = app;



