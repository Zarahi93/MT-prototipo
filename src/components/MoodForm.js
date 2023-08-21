import React, { useState } from 'react';
import './MoodForm.css';

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
    <section className='moodForm'>
      <h2>Registrar Estado de Ánimo</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='Seleccion'>
          Selecciona tú estado de Ánimo:
          <select className='opciones' value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
            <option value="" disabled>Tú estado de ánimo es:</option>
            {moodOptions.map((mood, index) => (
              <option key={index} value={mood}>{mood}</option>
            ))}
          </select>
        </label>
        <label className='Actividades'>
          Actividades:
          <textarea className='descripcion' rows={4} cols={30} value={activities} onChange={(e) => setActivities(e.target.value)} />
        </label>
        <button  className='boton' type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default MoodForm;
