import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Philosophie from './components/Pages/Philosophie';
import Home from './components/Pages/Home';
import Roundnet from './components/Pages/Roundnet';
import FußballHerren from './components/Pages/FußballHerren';
import FußballDamen from './components/Pages/FußballDamen';
import TennisHerren from './components/Pages/TennisHerren';
import TennisDamen from './components/Pages/TennisDamen';
import Konzept from './/components/Pages/Konzept';
import Datenschutz from './components/Pages/Datenschutz';
import Kontakt from './components/Pages/Kontakt';
import WerdeMitglied from './components/Pages/WerdeMitglied';
import UnsereSponsoren from './components/Pages/UnsereSponsoren';
import Impressum from './components/Pages/Impressum';
import Footer from './components/Footer/Footer'
import NewsPage from './components/Pages/NewsPage'

function App() {
  let news=require('./json/News.json')
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href='/' style={{backgroundColor:'#017241'}}>
            <img src='/img/usc-logo.png' className="App-logo" alt="logo"/>
          </a>
        </header>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Philosophie' element={<Philosophie/>}/>
          <Route path='/Roundnet' element={<Roundnet/>}/>
          <Route path='/Fussball-Herren' element={<FußballHerren/>}/>
          <Route path='/Fussball-Damen' element={<FußballDamen/>}/>
          <Route path='/Tennis-Herren' element={<TennisHerren/>}/>
          <Route path='/Tennis-Damen' element={<TennisDamen/>}/>
          <Route path='/Konzept' element={<Konzept/>}/>
          <Route path='/Datenschutz' element={<Datenschutz/>}/>
          <Route path='/Kontakt' element={<Kontakt/>}/>
          <Route path='/Werde-Mitglied' element={<WerdeMitglied/>}/>
          <Route path='/Unsere-Sponsoren' element={<UnsereSponsoren/>}/>
          <Route path='/Impressum' element={<Impressum/>}/>
          {news.map((item, index) => {
            return(
              <Route key={index} path={'/News-'+index} element={<NewsPage index={index}/>}/>
            )
          })}
        </Routes>
        <Footer/>
      </div>
  </Router>
  );
}

export default App;
