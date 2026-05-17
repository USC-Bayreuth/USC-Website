import {Component} from 'react'

class Anfängerkurs extends Component{
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
                    <h1>
                    Volleyball Anfängerkurs – Sommersemester 2026
                    </h1>

                    <p>
                    Du hast Lust auf Volleyball, aber bisher kaum oder gar keine Erfahrung? 
                    Dann ist unser <b>Volleyball-Anfängerkurs</b> genau das Richtige für dich!

                    Der <b>USC Bayreuth e.V.</b> startet im <b>Sommersemester 2026</b> erstmals 
                    einen speziellen Hallenvolleyball-Kurs für Einsteigerinnen und Einsteiger. 
                    In entspannter Atmosphäre vermitteln wir die wichtigsten Grundlagen des 
                    Volleyballsports – ganz ohne Vorkenntnisse.
                    </p>

                    <p>
                    <b>Das erwartet euch</b>
                    </p>

                    <p>
                    Im Kurs lernt ihr Schritt für Schritt die grundlegenden Techniken des 
                    Volleyballs kennen, darunter:
                    

                    <ul className="list">
                        <li>Pritschen</li>
                        <li>Baggern</li>
                        <li>Schlagen</li>
                        <li>
                            sowie die Grundlagen von Bewegung, Stellungsspiel und Teamkommunikation
                        </li>
                    </ul>

                    
                    Der Fokus liegt auf <b>Spaß am Sport</b>, gemeinsamem Lernen und einem 
                    angenehmen Einstieg in den Volleyball. 
                    </p>
                    <p><br /></p>

                    <p>
                    <b>Pilotprojekt des USC Bayreuth e.V.</b>
                    </p>

                    <p>
                    Der Anfängerkurs ist ein Pilotprojekt des USC Bayreuth e.V. und 
                    findet erstmals im Sommersemester 2026 statt.
                    
                    Da wir eine persönliche Betreuung und optimale Trainingsbedingungen 
                    ermöglichen möchten, ist die Teilnehmerzahl zunächst auf  
                    <b> 16 Studierende</b> begrenzt.
                    </p>

                    <p>
                    Ab dem <b>Wintersemester 2026/27</b> ist geplant, den Kurs gemeinsam mit 
                    dem Hochschulsport in größerem Rahmen anzubieten.
                    </p>

                    <p><br /></p>
                    <p>
                    <b>Kostenloses Probetraining</b>
                    </p>

                    <p>
                    Du möchtest zuerst ausprobieren, ob Volleyball etwas für dich ist? 
                    Kein Problem!
                    </p>

                    <p>
                    Ein kostenloses Probetraining kann jederzeit per E-Mail an{" "}
                    <a className='link' href='mailto:volleyball@usc-bayreuth.de'>
                        volleyball@usc-bayreuth.de
                    </a>{" "}
                    oder über WhatsApp unter der Handynummer von Tobias Siegert vereinbart werden.
                    </p>

                    <p>
                    Wir freuen uns auf euch! 🏐
                    </p>
                
            </>
        )
    }
}

export default Anfängerkurs