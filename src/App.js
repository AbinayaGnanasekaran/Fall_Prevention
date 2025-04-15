import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthForm from "./HealthForm";
import HealthOptions from "./HealthOptions";
import ExercisePage from "./ExercisePage";
import FoodPage from "./FoodPage";
import Track from "./Track";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthForm />} />
        <Route path="/options" element={<HealthOptions />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/track" element={<Track />} />
       
      </Routes>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HealthOptions from "./HealthOptions";
// import FoodPage from "./FoodPage";
// import ExercisePage from "./ExercisePage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HealthOptions />} />
//         <Route path="/food" element={<FoodPage />} />
//         <Route path="/exercise" element={<ExercisePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//======================================
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HealthOptions from "./HealthOptions";
// import ExercisePage from "./ExercisePage";
// import FoodPage from "./FoodPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HealthOptions />} />
//         <Route path="/exercise" element={<ExercisePage />} />
//         <Route path="/food" element={<FoodPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
