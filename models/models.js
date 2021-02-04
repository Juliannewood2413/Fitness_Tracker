const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workout= new Schema({
    day: {type: Date, default: Date.now},
    //add require/messages
    exercises: [
        {
            type:{
                type: String,
                trim: true,
                required: "Please enter the type of exercise"
            } 
            ,
            name:{
                type: String,
                trim: true,
                required: "Please enter the name of the exercise"
            },
            duration: {
                type: Number,
                required: "Please enter the duration of the exercise (in minutes)"
            },
       
        
            weight: {type: Number},
            reps: {type: Number},
       
        
            sets: {type: Number}
        
        }
    ]
});

const workoutSchema = mongoose.model("workoutSchema", workout);

module.exports = workoutSchema;