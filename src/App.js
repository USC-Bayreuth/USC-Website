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
import WerdeMitglied from './components/Pages/WerdeMitglied';
import UnsereSponsoren from './components/Pages/UnsereSponsoren';
import Impressum from './components/Pages/Impressum';
import NewsPage from './components/Pages/NewsPage';
import Verantwortliche from './components/Pages/Verantwortliche';
import ErrorPage from './components/Pages/ErrorPage';
import Volleyball from './components/Pages/Volleyball';
import Volleyballturnier from './components/Pages/Volleyballturnier';
import Footer from './components/Footer/Footer';



function App() {
  let news=require('./json/News.json')
  let animation='fadeInUp'
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href='/' style={{backgroundColor:'#017241'}}>
            <img src='/img/usc-logo.png' className="App-logo" alt="logo"/>
          </a>
        </header>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Philosophie' element={<Philosophie/>}/>
          <Route path='/Roundnet' element={<Roundnet/>}/>
          <Route path='/Fussball-Herren' element={<FußballHerren animation={animation}/>}/>
          <Route path='/Fussball-Damen' element={<FußballDamen animation={animation}/>}/>
          <Route path='/Tennis-Herren' element={<TennisHerren animation={animation}/>}/>
          <Route path='/Tennis-Damen' element={<TennisDamen animation={animation}/>}/>
          <Route path='/Konzept' element={<Konzept/>}/>
          <Route path='/Datenschutz' element={<Datenschutz/>}/>
          <Route path='/Werde-Mitglied' element={<WerdeMitglied/>}/>
          <Route path='/Unsere-Sponsoren' element={<UnsereSponsoren/>}/>
          <Route path='/Impressum' element={<Impressum/>}/>
          <Route path='/Verantwortliche' element={<Verantwortliche/>}/>
          <Route path="/Volleyball" element={<Volleyball/>}/>
          <Route path="/Volleyballturnier" element={<Volleyballturnier/>}/>
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
