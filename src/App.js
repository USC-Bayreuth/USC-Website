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
import Verantwortliche from './components/Pages/Verantwortliche';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
  let news=require('./json/News.json')
  //todo url news
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
          <Route path='/Verantwortliche' element={<Verantwortliche/>}/>
          {news.map((item, index) => {
            return(
              <Route key={index} path={'/News/'+createURL(item.title)} element={<NewsPage index={index}/>}/>
            )
          })}
          <Route exact path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
  </Router>
  );
}

export function createURL(title){
  let url=''
  let combining = /[\u0300-\u036F]/g
  let lastDash=false
  for(let c of title){
    if(c.toUpperCase() !== c.toLowerCase()){
      if(c==='ß')
        url+='ss'
      else
        url+=c.toLowerCase()
      lastDash=false
    }
    else if(!isNaN(c) && c!==' '){
      url+=c
      if(c==='-')
        lastDash=true
      else
        lastDash=false
    }
    else if(!lastDash){
      url+='-'
      lastDash=true
    }
    url=url.normalize('NFKD').replace(combining, '')
  }
  return url
}

export default App;
