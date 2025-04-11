// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setUser(user || null));
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <div>Carregando...</div>;
  return user ? children : <Navigate to='/login' />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
