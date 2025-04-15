import { useState } from "react";
import "./ExercisePage.css";

const exercises = [
  {
    id: 1,
    name: "Leg Raises",
    image: "/stretch.jpeg",
    video: "https://www.youtube.com/watch?v=aclHkVaku9U"
  },
  {
    id: 2,
    name: "Leg Raises",
    image: "/stretch.jpeg",
    video: "https://www.youtube.com/watch?v=JB2oyawG9KI"
  },
  {
    id: 3,
    name: "Arm Raises",
    image: "/images/arm-raises.jpg",
    video: "https://www.youtube.com/watch?v=2LfyK2P6xCc"
  }
];

export default function ExercisePage() {
  const [completedExercises, setCompletedExercises] = useState({});

  const handleCompletion = (id, status) => {
    setCompletedExercises({ ...completedExercises, [id]: status });
  };

  return (
    <div className="exercise-container">
      <div className="header">
        <h1 className="title">Exercise Recommendations</h1>
        <p className="subtitle">Here are some exercises tailored for your health needs.</p>
      </div>
      <div className="recommendation-section">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-card">
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <div className="exercise-info">
              <span className="exercise-name">{exercise.name}</span>
              <a href={exercise.video} target="_blank" rel="noopener noreferrer" className="video-link">
                Watch Video
              </a>
            </div>
            <div className="track-buttons">
              <button 
                className={`track-button ${completedExercises[exercise.id] === 'completed' ? 'completed' : ''}`} 
                onClick={() => handleCompletion(exercise.id, 'completed')}
              >
                Completed
              </button>
              <button 
                className={`track-button ${completedExercises[exercise.id] === 'notCompleted' ? 'not-completed' : ''}`} 
                onClick={() => handleCompletion(exercise.id, 'notCompleted')}
              >
                Not Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
