import React from 'react';
import { auth } from './firebase-config'; // Importando o Firebase Auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginGoogle = () => {
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login com Google bem-sucedido!");
      // Redirecionar ou atualizar o estado do usuário aqui
    } catch (error) {
      alert('Falha no login com Google: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login com Google</h2>
      <button onClick={handleLoginWithGoogle}>Login com Google</button>
    </div>
  );
};

export default LoginGoogle;
