import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthForm from './components/AuthForm.js';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';

function App() {
  const [moodHistory, setMoodHistory] = useState([]);

  const addMoodEntry = (newEntry) => {
    setMoodHistory([...moodHistory, newEntry]);
  };

  return (
    <main className="App">
      <h1>Mood Tracker</h1>
      <BrowserRouter>
      <section>
      <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/moodform" element={<MoodForm onAddMood={addMoodEntry} />} />
      <Route path="/moodhistory" element={<MoodHistory moodHistory={moodHistory} />} />

    </Routes>
   </section>
   </BrowserRouter>
      
    </main>
  );
}

export default App;
