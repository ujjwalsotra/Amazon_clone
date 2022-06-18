import React, { useState } from 'react'
import './Login.css'
import {Link,Navigate,useNavigate} from "react-router-dom";
import { auth } from './firebase';
function Login() {
    const history=useNavigate(); // allows us to progomatically change the URL
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn =e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history('/');
        })
        .catch(error=> alert(error.message));
        //Some firebase stuff here
    }
    const register=e=>{
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email,password)
         .then((auth)=>{
            console.log(auth);// successfully created a new user
            if(auth){
                history('/');
            }
         })
         .catch(error => alert(error.message))
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