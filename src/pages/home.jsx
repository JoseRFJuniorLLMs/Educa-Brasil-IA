// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const getTasks = async () => {
    const snapshot = await getDocs(collection(db, 'tasks'));
    setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addTask = async () => {
    if (!input) return;
    await addDoc(collection(db, 'tasks'), { text: input });
    setInput('');
    getTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    getTasks();
  };

  const logout = () => signOut(auth);

  useEffect(() => { getTasks(); }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>CRUD com Firestore</h1>
        <button className='text-red-500' onClick={logout}>Logout</button>
      </div>
      <div className='mt-4 flex gap-2'>
        <input className='border p-2' value={input} onChange={e => setInput(e.target.value)} placeholder='Nova tarefa' />
        <button onClick={addTask} className='bg-green-500 text-white px-4'>Adicionar</button>
      </div>
      <ul className='mt-4'>
        {tasks.map(task => (
          <li key={task.id} className='flex justify-between border p-2 mt-2'>
            {task.text}
            <button className='text-sm text-red-600' onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
