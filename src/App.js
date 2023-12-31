import React, { useState } from 'react';
import './App.css';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';

function App() {
  const [moodHistory, setMoodHistory] = useState([]);

  const addMoodEntry = (newEntry) => {
    setMoodHistory([...moodHistory, newEntry]);
  };

  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <MoodForm onAddMood={addMoodEntry} />
      <MoodHistory moodHistory={moodHistory} />
    </div>
  );
}

export default App;
