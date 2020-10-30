const router = require("express").Router();
const Workout = require("../models/workout");

router.Workout.create({ name: "Workouts" })
    .then(dbLibrary => {
        console.log(dbLibrary);
    })
    .catch(({ message }) => {
        console.log(message);
    });

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({ _id: -1 }).limit(1)
        .populate("workouts")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;