// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/health", (req, res) => {
  const { bp, sugar, pulse, fallHistory } = req.body;

  const bpNum = parseInt(bp);
  const sugarNum = parseInt(sugar);
  const pulseNum = parseInt(pulse);

  const isAbnormal =
    bpNum < 90 || bpNum > 140 ||
    sugarNum < 70 || sugarNum > 140 ||
    pulseNum < 60 || pulseNum > 100 ||
    fallHistory === "yes";

  if (isAbnormal) {
    console.log("🚨 Abnormal condition detected! Sending alert...");

    const food = "Avoid junk food, eat fruits and stay hydrated.";
    const exercise = "Try light yoga or stretching. Avoid high intensity.";

    res.json({
      alert: true,
      message: "⚠️ Abnormal health values detected!",
      suggestion: { food, exercise }
    });
  } else {
    res.json({
      alert: false,
      message: "✅ All health readings are normal."
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});


// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json()); // Allow JSON requests

// // Normal health ranges
// const HEALTH_THRESHOLDS = {
//     "bp_systolic": [90, 120], 
//     "bp_diastolic": [60, 80], 
//     "sugar": [70, 140],  
//     "pulse": [60, 100]   
// };

// // Function to check abnormality
// function checkAbnormality(data) {
//     let alerts = [];
//     for (let key in HEALTH_THRESHOLDS) {
//         if (data[key] !== undefined) {
//             let [low, high] = HEALTH_THRESHOLDS[key];
//             if (data[key] < low) alerts.push(`${key} is too low: ${data[key]}`);
//             else if (data[key] > high) alerts.push(`${key} is too high: ${data[key]}`);
//         }
//     }
//     return alerts;
// }

// // Function to generate recommendations
// function generateRecommendations(data) {
//     let food = [];
//     let exercise = [];

//     if (data.sugar !== undefined) {
//         if (data.sugar > 140) food.push("Avoid sweets, eat fiber-rich food.");
//         else if (data.sugar < 70) food.push("Eat fruits, drink juice.");

//         exercise.push("Light walking to control sugar levels.");
//     }

//     if (data.bp_systolic !== undefined) {
//         if (data.bp_systolic > 120) food.push("Reduce salt, drink more water.");
//         else if (data.bp_systolic < 90) food.push("Drink more fluids, increase salt intake.");

//         exercise.push("Breathing exercises for BP control.");
//     }

//     return { food, exercise };
// }

// // API to check health data
// app.post("/check_health", (req, res) => {
//     const userData = req.body;
//     const alerts = checkAbnormality(userData);
//     const { food, exercise } = alerts.length > 0 ? generateRecommendations(userData) : { food: [], exercise: [] };

//     res.json({ alerts, food, exercise });
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
