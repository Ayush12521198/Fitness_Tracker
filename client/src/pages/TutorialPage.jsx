import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorialPage.css';

const features = [
  { title: 'Monitoring heart rate', path: '/heart-rate' },
  { title: 'Monitoring breathing', path: '/breathing' },
  { title: 'Tracking calories burnt', path: '/calories' },
  { title: 'Watching cardio fitness levels', path: '/cardio' },
  { title: 'Sleep tracking', path: '/sleep' },
  { title: 'Silent alarm', path: '/alarm' },
  { title: 'Smart like your phone', path: '/smart' }
];

function TutorialPage() {
  const navigate = useNavigate();

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
   <div className="box">
    <div className="tutorial-container">
      <h1>Fitness Bands – All About Their Tracking Features</h1>
      <img src="https://www.reliancedigital.in/wp-content/uploads/2018/05/cover-new-1.jpg" alt="Fitness Bands" className="main-image" />
      <div className="topics">
        <h2>Topics:</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index} onClick={() => handleFeatureClick(feature.path)}>
              {feature.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default TutorialPage;
