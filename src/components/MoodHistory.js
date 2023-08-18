import React from 'react';

function MoodHistory({ moodHistory }) {
  return (
    <div>
      <h2>Historial de Estados de Ánimo</h2>
      <ul>
        {moodHistory.map((entry, index) => (
          <li key={index}>
            <p><strong>Fecha:</strong> {entry.date.toString()}</p>
            <p><strong>Estado de Ánimo:</strong> {entry.mood}</p>
            <p><strong>Actividades:</strong> {entry.activities}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodHistory;
