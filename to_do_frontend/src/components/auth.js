import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service'

function Auth(){
    
    const [isLoginView, setIsLoginView] = useState(true);

    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');

    const isDisabled = username.length===0||password.length===0;

    const [token, setToken] = useCookies(['token']);

    const loginClicked = () => {
        API.loginUser({username, password})
        .then(resp => setToken('token', resp.token))
        .catch(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({username, password})
        .then(resp => setToken('token', resp.token))
        .catch(error => console.log(error))
    }

    useEffect( () => {
        if(token['token']) window.location.href = '/tasks';
    }, [token])

    return (
        <div className='App'>
            <header className='App-header'>
                {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            </header>
            <div className='Login-container'>
                <input id='username' type='text' placeholder=' Enter Username' value={username} 
                onChange={evnt => setUsername(evnt.target.value)}/><br/>
                <input id='password' type='password' placeholder='Enter Password' value={password} 
                onChange={evnt => setPassword(evnt.target.value)}/><br/>

                {isLoginView ? 
                <button disabled={isDisabled} className='btn btn-outline-primary Login-items' 
                onClick={loginClicked}>Login</button>
                : <button disabled={isDisabled} className='btn btn-outline-primary Login-items' 
                onClick={registerClicked}>Register</button>}

                {isLoginView ? 
                <p>Don't have an account? Register <a href='#' onClick={()=> setIsLoginView(false)}>here</a>.</p> 
                : <p>Already have an account? Login <a href='#' onClick={()=> setIsLoginView(true)}>here</a>.</p>}
            </div>
        </div>
    )
}

export {Auth};