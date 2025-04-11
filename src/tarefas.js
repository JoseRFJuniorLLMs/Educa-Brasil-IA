import React, { useState, useEffect } from 'react';
import { db } from './firebase-config'; // Importando Firestore
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Função para pegar tarefas do Firestore
  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const tasksList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTasks(tasksList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para adicionar tarefa
  const addTask = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      await addDoc(collection(db, 'tasks'), {
        task,
        completed: false,
      });
      setTask('');
      fetchTasks(); // Recarregar tarefas
    }
  };

  // Função para excluir tarefa
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    fetchTasks(); // Recarregar tarefas
  };

  return (
    <div>
      <h2>Tarefas</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefas;
