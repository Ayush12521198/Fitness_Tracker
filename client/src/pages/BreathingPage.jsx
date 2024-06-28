import React from 'react';
import './Stylepage.css';

function BreathingPage() {
  return (
    <div className="box">
    <div className="feature-container">
      <h2>Monitoring Breathing</h2>
      <p style={{marginBottom:"30px"}}>
      Some fitness bands help you stay calm, healthy and more focused at what you do. Every session of breathing in and out allows your body to function effectively. We tend to ignore good, deep breathing and bands such as the Garmin VivoSmart 3 and the Fitbit Charge 2 measure beat-to-beat variations from your recorded heart rate, helping determine a comfortable breathing rate.
      </p>
      <img src="https://www.reliancedigital.in/wp-content/uploads/2018/05/monitor-breathing.jpg" alt="Breathing Monitoring" className="feature-image" />
      <p>
      Every time you turn on the “Breathing Sessions” activity and set a timer, the band vibrates, aligning your inhaling and exhaling process. This helps to get your breath in rhythm.
      </p>
    </div>
    </div>
  );
}

export default BreathingPage;
