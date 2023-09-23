import React, {useNavigate, useState } from 'react';
import {auth} from '../../firebase'
import './login.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const auth = getAuth();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      console.log(userCredential._tokenResponse.registered)
      if(userCredential._tokenResponse.registered===true){
        window.location.replace('/submit');
      }
    }).catch((error)=>{
      console.log(error.code);
      if(error.code==='auth/invalid-login-credentials'){
        alert('Invalid Login Credentials');
      }
      
    });
    
    //window.history.pushState({}, undefined, "/");
    //window.location.reload();
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((useCredential)=>{
      console.log(useCredential)
      window.location.replace('/submit');
    }).catch((error)=>{
      console.log(error);
      alert("User already exist");
      window.location.replace('/login');
    });
  }


  const toggleLoginForm = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const toggleSignupForm = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  return (
    <div className="login-container">
      <div className="left-half">
        <img src="https://res.cloudinary.com/nihars3/image/upload/v1695443443/MassCoders/mass-coders-color-pallet-transparent_ewp94m.png" className='loginlogo' />
      </div>
      <div className="right-half">
  <h2 class="logwelcome">Welcome <span className='massgreen'>MassCoder!</span><br />Let's stay <span className='massgreen'>Productive</span>.<br/><br/></h2>
  {showLoginForm ? (
    <form onSubmit={signIn}>
      <div>
        <label htmlFor="username" className='headinglogin hl-2'>Email:</label>
        <input type="email" id="username" name="username" className='inputform' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="password" className='headinglogin'>Password:</label>
        <input type="password" id="password" name="password" className='inputform' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <br/>
      <div className='lb-cont'>
        <button type="submit" className='logbut'>Login</button>
      </div>
    </form>
  ) : showSignupForm ? (
    <form onSubmit={signUp}>
      <div>
        <label htmlFor="signup-email" className='headinglogin hl-2'>Email:</label>
        <input type="email" id="signup-email" name="signup-email" className='inputform' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <br/>
      <div>
        <label htmlFor="signup-password" className='headinglogin'>Password:</label>
        <input type="password" id="signup-password" name="signup-password" className='inputform' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <br/>
    </form>
  ) : (
    <div className='button-cont'>
      <button onClick={toggleLoginForm}  className='logbut'>Login</button>
      <button onClick={toggleSignupForm}  className='logbut'>Signup</button>
    </div>
  )}
</div>

    </div>
  );
}

export default Login;
