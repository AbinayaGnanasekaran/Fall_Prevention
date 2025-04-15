import { useNavigate } from "react-router-dom";
import "./HealthOptions.css";

export default function HealthOptions() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="page-title">Enhance Your Well-being</h1>
      
      <div className="content">
        <div className="box">
          <img src="/food.jpg" alt="Exercise" className="circle-image" />
          <h2 className="box-title">Personalized Exercise Plans</h2>
          <p className="description">Stay fit with customized workout routines designed for your health needs.</p>
          <button className="option-button" onClick={() => navigate("/exercise")}>Explore Exercises</button>
        </div>

        <div className="box">
          <img src="/foo.jpeg" alt="Food" className="circle-image" />
          <h2 className="box-title">Healthy Nutrition Guidance</h2>
          <p className="description">Discover balanced meals and dietary tips to maintain a healthier lifestyle.</p>
          <button className="option-button" onClick={() => navigate("/food")}>Discover Foods</button>
        </div>
      </div>
    </div>
  );
}
