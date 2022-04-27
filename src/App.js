import logo from './img/usc-logo.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
