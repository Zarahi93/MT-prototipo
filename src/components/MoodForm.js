import React, { useState } from 'react';

function MoodForm({ onAddMood }) {
  const [selectedMood, setSelectedMood] = useState('');
  const [activities, setActivities] = useState('');

  const moodOptions = ['Emocionado', 'Feliz', 'Neutral', 'Triste', 'Enojado'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood && activities) {
      onAddMood({ mood:selectedMood, activities, date: new Date() });
      setSelectedMood('');
      setActivities('');
    }
  };

  return (
    <div>
      <h2>Registrar Estado de Ánimo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecciona tú estado de Ánimo:
          <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
            <option value="" disabled>Tú estado de ánimo es:</option>
            {moodOptions.map((mood, index) => (
              <option key={index} value={mood}>{mood}</option>
            ))}
          </select>
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
