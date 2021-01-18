import React, {useState} from 'react';
import {API} from '../api-service'

function RegisterUser(){

    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');

    const isDisabled = username.length===0||password.length===0;


    const loginClicked = () => {
        window.location.href = '/'
    }

    const registerClicked = () => {
        API.registerUser({username, password})
        .catch(error => console.log(error))
        alert('New user registered. Now, login with the same credentials.')
        window.location.href = '/'
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Register</h1>
                <div class="mb-3">
                    <input id='UserName' type='text' className="form-control" placeholder='Username' value={username} 
                        onChange={evnt => setUsername(evnt.target.value)}/>
                </div>
                <div class="mb-3">
                    <input id='password' type='password' className="form-control" placeholder='Password' value={password} 
                        onChange={evnt => setPassword(evnt.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                </div>

                <button disabled={isDisabled} className='btn btn-outline-primary Login-items' 
                onClick={registerClicked}>Login</button>

                <p className='p-login-register'>Already have an account? Login <a href='#' onClick={loginClicked}>here</a>.</p> 
            </header>
        </div>
    )
}

export {RegisterUser};