import React, { useState } from 'react';
import './App.css';
import AuthForm from './components/AuthForm';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';

function App() {
  const [moodHistory, setMoodHistory] = useState([]);

  const addMoodEntry = (newEntry) => {
    setMoodHistory([...moodHistory, newEntry]);
  };

  return (
    <main className="App">
      <AuthForm/>
      <h1>Mood Tracker</h1>
      <MoodForm onAddMood={addMoodEntry} />
      { <MoodHistory moodHistory={moodHistory} /> }
    </main>
  );
}

export default App;
