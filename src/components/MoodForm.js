import React, { useState, useEffect } from 'react';
import './MoodForm.css';
import db from '../firebase.js';
import { collection, addDoc } from "firebase/firestore"; 
import AuthForm from './AuthForm'; // Importar el componente Login
import { getAuth, onAuthStateChanged } from "firebase/auth";


function MoodForm({ onAddMood }) {
  const [selectedMood, setSelectedMood] = useState('');
  const [activities, setActivities] = useState('');
  const [user, setUser] = useState(null);

  const moodOptions = ['Emocionado', 'Feliz', 'Neutral', 'Triste', 'Enojado'];

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  },);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("Usuario no autenticado.");
      return;
    }

    if (selectedMood && activities) {
      const moodEntry = {
        mood: selectedMood,
        activities,
        date: new Date().toString(),
        userId: user.uid, // Agrega el ID del usuario a la entrada de estado de ánimo
      };

      try {
        const docRef = await addDoc(collection(db, "moods"), moodEntry); // Cambia la colección a la adecuada
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error writing document:", error);
      }
    }
  };

  return (
    <section className='moodForm'>
      <h2>Registrar Estado de Ánimo</h2>
      {user ? (
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
      ) : (
        <AuthForm setUser={setUser} />
      )}
    </section>
  );
}

export default MoodForm;
