import Login from './components/Login/login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home/home';
import Submit from './components/Submit/submit'
import Main from './components/Main/main'
import Todo from './components/todo/todo';
import Bard from './components/Bard/bard'

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/login' Component={Login}></Route>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/submit' Component={Submit}></Route>
          <Route exact path='/main' Component={Main}></Route>
          <Route exact path='/todo' Component={Todo}></Route>
          <Route exact path='/bard' Component={Bard}></Route>
        </Routes>
      </Router>
  );
}

export default App;
