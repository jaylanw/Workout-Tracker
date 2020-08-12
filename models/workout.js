const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
          },
          duration: {
            type: Number,
            required: "Enter workout time in minutes"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ],
      
      day: {
        type: Date,
        default: () => new Date()
      }
    }
  );
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;