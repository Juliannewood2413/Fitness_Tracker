const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workout= new Schema({
    day: {type: Date, default: Date.now},
    //add require/messages
    exercises: [
        {
            type: {type: String}
        },
        {
            name: {type: String}
        },
        {
            duration: {type: Number}
        },
        {
            weight: {type: Number}
        },
        {
            reps: {type: Number}
        },
        {
            sets: {type: Number}
        }
    ]
});

const workoutModel = mongoose.model("workoutModel", workout);

module.exports = workoutModel;