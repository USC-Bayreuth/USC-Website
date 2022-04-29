import logo from './img/usc-logo.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  //timecode: 42:26
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href='/'>
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
        </header>
        <Navbar/>
      </div>
  </Router>
  );
}

export default App;
