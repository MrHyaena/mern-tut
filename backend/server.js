require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutsRouter");
const usersRouter = require("./routes/usersRouter");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// router handler
app.use("/api/user", usersRouter);
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server up on port 4000 and connected to database");
    });
  })
  .catch((err) => {
    console.log(err);
  });
