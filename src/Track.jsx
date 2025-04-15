// // Track.js
// import React, { useEffect, useState } from "react";

// export default function Track() {
//   const [exerciseData, setExerciseData] = useState(null);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("exerciseData"));
//     if (data) setExerciseData(data);
//   }, []);

//   return (
//     <div className="track-container">
//       <h1>📊 Exercise Tracker</h1>
//       {exerciseData ? (
//         <div className="exercise-card">
//           <p><strong>Date:</strong> {exerciseData.date}</p>
//           <p><strong>Exercise Suggestion:</strong> {exerciseData.exercise}</p>
//         </div>
//       ) : (
//         <p>No exercise data available. Please submit your health form first.</p>
//       )}
//     </div>
//   );
// }
import React from "react";
import { useLocation } from "react-router-dom";
import "./Track.css";

export default function Track() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="track-container">
      <h1>🩺 Health Summary</h1>
      {data ? (
        <div className="summary-card">
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Blood Pressure:</strong> {data.bp}</p>
          <p><strong>Blood Sugar:</strong> {data.sugar}</p>
          <p><strong>Fall History:</strong> {data.fallHistory}</p>
          <p><strong>Data Collected On:</strong> {data.date}</p>
        </div>
      ) : (
        <p>No data received. Please fill the form first.</p>
      )}
    </div>
  );
}
