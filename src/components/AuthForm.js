import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Realiza las acciones necesarias después del inicio de sesión
      } catch (error) {
        console.error("Error signing in:", error);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User registered:", user);
        // Realiza las acciones necesarias después del registro
      } catch (error) {
        console.error("Error registering:", error);
      }
    }
  };

  return (
    <div>
      <h2>{isSignIn ? "Iniciar Sesión" : "Registrarse"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Contraseña: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        </div>

        <button type="submit">
          {isSignIn ? "Iniciar Sesión" : "Registrarse"}
        </button>
        <button type="button" onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia Sesión"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;

