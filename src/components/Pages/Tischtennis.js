import {Component} from 'react'

class Tischtennis extends Component{
    state={mobileMode: window.innerWidth<960}

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions=()=>{
        let newState=Object.assign(this.state)
        if(window.innerWidth>=960)
            newState.mobileMode=false
        else
            newState.mobileMode=true
        this.setState(newState)
    }
    render(){
        return(
            <>
                <h1>Tischtennis</h1>
               <p> Wir freuen uns, die neu gegründete Tischtennisabteilung vorzustellen! Aktuell läuft die Vorbereitung auf unsere erste Wettkampfsaison dort starten wir mit viel Motivation und Teamgeist in der Kreisklasse C – und das ist erst der Anfang.</p>
                <p>Unser Ziel ist es, in den kommenden Jahren eine lebendige und leistungsstarke Abteilung aufzubauen. Dabei setzen wir auf Nachwuchsarbeit, Teamzusammenhalt und sportliche Entwicklung. Langfristig möchten wir mehrere Mannschaften im Liga- und Pokalbetrieb etablieren.</p>
                <p>Du hast Lust, Teil davon zu sein?</p>
                <p>Egal ob Anfänger, Hobbyspieler oder erfahrener Wettkämpfer – bei uns ist jeder willkommen, der Spaß am Spiel hat und sich in einer offenen, engagierten Gemeinschaft wohlfühlt.</p>
               <p> Melde dich einfach beim Abteilungsleiter Laurits Kretschmer unter <a className='link' href='mailto:laurits.kretschmer@uni-bayreuth.de'>laurits.kretschmer@uni-bayreuth.de</a></p>
               
               <h1>Team</h1>
               <img alt='Tischtennis' src='/img/Tischtennis/Teamfoto USC TT.jpg' className='mannschaftsfoto'/>
 
 
            <h1> Trainingszeiten (Sommersemester)</h1>
                   <p> Montag 18:00-20:00*</p>
                   <p>  Donnerstag 17:00-18:30 (parallel zum Hochschulsport)*</p>
                   
                    <p style={{textAlign: 'center',fontSize: '0.8rem',marginTop: '2rem'}}>*in dem letzten Drittel der Spielhalle - <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' tyle={{color: 'inherit', textDecoration: 'none',font: 'inherit', fontSize: '0.8rem' }}target='_blank' rel='noreferrer'>Sportinstitut</a> </p>                      
                                        </>
        )
    }
}

export default Tischtennis