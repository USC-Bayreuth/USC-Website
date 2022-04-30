import logo from './img/usc-logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Philosophie from './components/Pages/Philosophie';
import Home from './components/Pages/Home';
import Roundnet from './components/Pages/Roundnet';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href='/'>
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </header>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Philosophie' element={<Philosophie/>}/>
          <Route path='/Roundnet' element={<Roundnet/>}/>
        </Routes>
      </div>
  </Router>
  );
}

export default App;
