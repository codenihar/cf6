import './App.css';
import Login from './components/Login/login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home/home';
import Submit from './components/Submit/submit'

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/login' Component={Login}></Route>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/submit' Component={Submit}></Route>
        </Routes>
      </Router>
  );
}

export default App;
