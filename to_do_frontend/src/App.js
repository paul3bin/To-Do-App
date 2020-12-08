import './App.css';
import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { TasksList } from './components/list-tasks';
import {API} from './api-service'

function App() {
  
  const [token, setToken, deleteToken] = useCookies(['token']);

  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    if(!token['token']) window.location.href = '/'
  }, [token])

  const logoutUser = () => {
    deleteToken(['token']);
  }

  useEffect(() => {
    API.getTasks(token['token']).then(resp => setTasks(resp))
  }, [])

  const updateTaskListAction = task =>{
    const updatedTaskList = tasks.filter(tsk => tsk.id !== task.id)
    setTasks(updatedTaskList)
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h2>Tasks To-Do</h2>
        <FontAwesomeIcon icon={faSignOutAlt} className="Icons" onClick={logoutUser}/>
      </nav>
      <div>
        <TasksList 
          tasks={tasks}
          updateTaskList={updateTaskListAction}
        />
        <button className='btn btn-success'>Add New Task</button>
      </div>
    </div>
  );
}

export default App;