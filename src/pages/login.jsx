// 📁 src/pages/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <input className='border p-2' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input className='border p-2' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button className='bg-blue-600 text-white px-4 py-2' onClick={loginEmail}>Login Email</button>
      <button className='bg-red-600 text-white px-4 py-2' onClick={loginGoogle}>Login Google</button>
    </div>
  );
};

export default Login;






// 📁 firebase.json para Deploy (na raiz do projeto)
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}

