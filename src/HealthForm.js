import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthForm.css";

export default function HealthForm() {
  const [healthData, setHealthData] = useState({
    age: "",
    bp: "",
    sugar: "",
    fallHistory: "",
  });

  const [popup, setPopup] = useState(null);
  const [collectedDate, setCollectedDate] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHealthData({ ...healthData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, bp, sugar, fallHistory } = healthData;
    const isAbnormal =
      parseInt(bp) >= 120 ||
      parseInt(sugar) >= 140 ||
      fallHistory === "yes" ||
      parseInt(age) >= 60;

    const now = new Date();
    const formattedDate = now.toLocaleString(); // e.g., "4/11/2025, 10:45:32 AM"
    setCollectedDate(formattedDate);

    if (isAbnormal) {
      const audio = new Audio("/alert.wav");
      audio.play();
      setPopup("danger");
    } else {
      setPopup("success");
    }
  };

  const handleProceed = () => {
    // Send healthData + date to both pages
    const dataWithDate = {
      ...healthData,
      date: collectedDate,
    };

    // Pass to both pages using navigate + state (optional enhancement: store in context/global if needed)
    navigate("/options", { state: dataWithDate });
    setTimeout(() => {
      navigate("/track", { state: dataWithDate });
    }, 500); // Slight delay to simulate navigation flow
  };

  return (
    <div className="form-container">
      <h1>Health Data Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={healthData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Blood Pressure (BP):
          <input
            type="number"
            name="bp"
            value={healthData.bp}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Blood Sugar Level:
          <input
            type="number"
            name="sugar"
            value={healthData.sugar}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fall History (yes/no):
          <select
            name="fallHistory"
            value={healthData.fallHistory}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      {popup && (
        <div className={`popup ${popup}`}>
          <h2>
            {popup === "success"
              ? "✅ You're Healthy! 🎉"
              : "⚠️ Warning! Health Risk Detected"}
          </h2>
          <p>📅 Data Collected: {collectedDate}</p>
          <button onClick={handleProceed}>Proceed</button>
        </div>
      )}
    </div>
  );
}



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./HealthForm.css";

// export default function HealthForm() {
//   const [healthData, setHealthData] = useState({
//     age: "",
//     bp: "",
//     sugar: "",
//     fallHistory: "",
//   });
//   const [popup, setPopup] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setHealthData({ ...healthData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { age, bp, sugar, fallHistory } = healthData;

//     // Condition check: if any condition is above the normal range
//     if (parseInt(bp) >= 120 || parseInt(sugar) >= 140 || fallHistory === "yes" || parseInt(age) >= 60) {
//       setPopup("danger"); // Unhealthy conditions
//     } else {
//       setPopup("success"); // Healthy conditions
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Health Data Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={healthData.age}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Blood Pressure (BP):
//           <input
//             type="number"
//             name="bp"
//             value={healthData.bp}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Blood Sugar Level:
//           <input
//             type="number"
//             name="sugar"
//             value={healthData.sugar}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Fall History (yes/no):
//           <select
//             name="fallHistory"
//             value={healthData.fallHistory}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </label>

//         <button type="submit">Submit</button>
//       </form>

//       {popup && (
//         <div className={`popup ${popup}`}>
//           <h2>{popup === "success" ? "You're Healthy! 🎉" : "Warning! Health Risk ⚠️"}</h2>
//           <button onClick={() => navigate("/options")}>Proceed</button>
//         </div>
//       )}
//     </div>
//   );
// }
