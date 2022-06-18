import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom";
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn =e=>{
        e.preventDefault();
        //Some firebase stuff here
    }
    const register=e=>{
        e.preventDefault();
        // do some firebase register
    }
  return (
    <div className='login'>
        <Link to={'/'}>
        <img className='login__logo'
         src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'/>
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type={'text'} value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type={'password'} value={password} onChange={e=> setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn} className='login__button'>Sign in</button>
            </form>
            <p>
                By signing-in you agree to amazon's clone Conditions of Use and Sale.
                Please see our Privacy Notice, our Cookies Notice.
            </p>
            <button type='submit' onClick={register} className='login__register'>Register</button>
        </div>
    </div>
  )
}

export default Login