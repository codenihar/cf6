import React, { useState } from 'react';
import './bard.css';

function Bard() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = () => {
    setIsLoading(true);

    fetch('https://apis.ccbp.in/jokes/random')
      .then(response => response.json())
      .then(data => {
        setJoke(data.value);
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-container p-3 d-flex flex-column justify-content-center text-center">
      <img src="https://res.cloudinary.com/nihars3/image/upload/v1695443443/MassCoders/mass-coders-color-pallet-transparent_ewp94m.png" className='loginlogo' />
      <div className='emo'>
      <button className="logbut" id="jokeBtn" onClick={fetchJoke}>
        Nihar's Joke!
      </button>
      <p className="joke-text mt-4" id="jokeText">
        {isLoading ? 'Loading...' : joke || 'Click the button above to get a random Joke!'}
      </p>
      <div className={`mt-5 mb-5 ${isLoading ? '' : 'd-none'}`} id="spinner">
        <div>
          <div className="spinner-border" role="status"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Bard;
