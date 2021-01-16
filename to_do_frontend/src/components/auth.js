import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api-service'

function Auth(){

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
        window.location.href = '/register-user'
    }

    useEffect( () => {
        if (token['token']==='undefined'){
            alert('Wrong username or password.')
            setToken('token', '')
            setUsername('')
            setPassword('')
        }
        else{
            if(token['token']) window.location.href = '/tasks';
        }
    }, [token])

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Login</h1>
                <div class="mb-3">
                    <input id='UserName' type='text' className="form-control" placeholder='Username' value={username} 
                        onChange={evnt => setUsername(evnt.target.value)}/>
                </div>
                <div class="mb-3">
                    <input id='password' type='password' className="form-control" placeholder='Password' value={password} 
                        onChange={evnt => setPassword(evnt.target.value)}/>
                </div>

                <button disabled={isDisabled} className='btn btn-outline-primary Login-items' 
                onClick={loginClicked}>Login</button>

                <p className='p-login-register'>Don't have an account? Register <a href='#' onClick={registerClicked}>here</a>.</p> 
            </header>
        </div>
    )
}

export {Auth};