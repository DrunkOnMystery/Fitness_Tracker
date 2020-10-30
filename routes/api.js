const router = require("express").Router();
const Workout = require("../models/workout");

module.exports = function (app) {
router.post("/api/workouts", (req, res) => {
    Workout.create({})
})

}