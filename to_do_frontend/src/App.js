import './App.css';
import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  const [token, setToken, deleteToken] = useCookies(['token']);
  
  useEffect(() => {
    if(!token['token']) window.location.href = '/'
  }, [token])

  const logoutUser = () => {
    deleteToken(['token']);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do Tasks</h2>
        <FontAwesomeIcon icon={faSignOutAlt} className="Icons" onClick={logoutUser}/>
      </header>
    </div>
  );
}

export default App;
