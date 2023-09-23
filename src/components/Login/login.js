import React, { useState } from 'react';
import './login.css';

function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

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
  <h2 class="logwelcome">Welcome <span className='massgreen'>MassCoder!</span><br />Let's stay <span className='massgreen'>Productive</span>.</h2>
  {showLoginForm ? (
    <form>
      <div>
        <label htmlFor="username" className='headinglogin'>Username:</label>
        <input type="text" id="username" name="username" className='inputform' />
      </div>
      <br/>
      <div>
        <label htmlFor="password" className='headinglogin'>Password:</label>
        <input type="password" id="password" name="password" className='inputform' />
      </div>
      <br/>
      <button onClick={toggleSignupForm} className='logbut'>Switch to Signup</button>
      <button type="submit" className='logbut'>Login</button>
    </form>
  ) : showSignupForm ? (
    <form>
      <div>
        <label htmlFor="signup-username" className='headinglogin' >Username:</label>
        <input type="text" id="signup-username" name="signup-username" className='inputform' />
      </div>
      <br/>
      <div>
        <label htmlFor="signup-email" className='headinglogin'>Email:</label>
        <input type="email" id="signup-email" name="signup-email" className='inputform' />
      </div>
      <br/>
      <div>
        <label htmlFor="signup-password" className='headinglogin'>Password:</label>
        <input type="password" id="signup-password" name="signup-password" className='inputform' />
      </div>
      <br/>
      <button onClick={toggleLoginForm} className='logbut'>Switch to Login</button>
      <button type="submit"  className='logbut'>Signup</button>
    </form>
  ) : (
    <div>
      <button onClick={toggleLoginForm}  className='logbut'>Login</button>
      <button onClick={toggleSignupForm}  className='logbut'>Signup</button>
    </div>
  )}
</div>

    </div>
  );
}

export default Login;
