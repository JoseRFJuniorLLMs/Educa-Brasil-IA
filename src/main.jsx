// 📁 Estrutura de arquivos reais para projeto React + Firebase + Tailwind

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// package.json (parcial)
// Execute: npm create vite@latest react-firebase-app -- --template react
// Depois: npm install firebase react-router-dom tailwindcss postcss autoprefixer

// Para rodar:
// npm run dev
