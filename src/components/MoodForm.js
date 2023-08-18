import React, { useState } from 'react';

function MoodForm({ onAddMood }) {
  const [mood, setMood] = useState('');
  const [activities, setActivities] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood && activities) {
      onAddMood({ mood, activities, date: new Date() });
      setMood('');
      setActivities('');
    }
  };

  return (
    <div>
      <h2>Registrar Estado de Ánimo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Estado de Ánimo:
          <input type="text" value={mood} onChange={(e) => setMood(e.target.value)} />
        </label>
        <label>
          Actividades:
          <input type="text" value={activities} onChange={(e) => setActivities(e.target.value)} />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default MoodForm;
