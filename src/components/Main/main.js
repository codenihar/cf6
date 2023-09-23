import React from 'react';
import './main.css'; // Import your custom CSS if needed

class Main extends React.Component {
  render() {
    return (
      <div className='whole'>
        <div className='main'>
            <div>
            <nav>
                <h1 className='massheading'>Mass<span className='masscolor-main'>Coders</span></h1>
                <ul>
                    <li><a href="/bard">Jokes</a></li>
                    <li><a href="/submit">Form</a></li>
                    <li><a href="/todo">Todo</a></li>
                    <li><a href="/article">Article</a></li>
                </ul>
            </nav>
            </div>
            <h1 className='codefuture'>Let's Code <span className='masscolor'> Future</span>!</h1>
        </div>
        
      </div>
    );
  }
}

export default Main;
