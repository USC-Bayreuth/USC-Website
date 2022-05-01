import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './FußballHerren.css'

class FußballDamen extends Component{
    render(){
        return(
            <>
                <h1>Fußball Damen</h1>
                <h1>Unsere Abteilung</h1>
                <p>Die Frauenfußballabteilung des USC Bayreuth bietet den Studentinnen die Möglichkeit, ihre sportlichen Ziele zu erreichen, ihre Soft-Skills zu stärken und ihr Netzwerk zu erweitern. Zwei Trainingseinheiten während der Saison, ein Spiel am Wochenende und sowohl die Winter- als auch die Sommervorbereitung stellen einen perfekten Ausgleich für den oft trägen Unialltag. Nach dem Aufstieg in der Premierensaison gehen wir 18/19 in der Kreisliga an den Start. Du möchtest dich darüber hinaus aktiv mit einbringen? 4 Ressorts, darunter Organisation, Media, Sponsoring oder Events bieten dir die Möglichkeit dazu. Kommilitonen. Freunde. Teamkollegen. Bei mittlerweile über 30 Spielerinnen fällt der Kontakt nicht schwer. Haben wir dein Interesse geweckt? Dann komm vorbei – Wir freuen uns auf neue Gesichter! Melde dich einfach bei Facebook oder per Mail an <a className='mail-to' href='mailto:damenfussball@usc-bayreuth.de'>damenfussball@usc-bayreuth.de</a>.</p>
                <h1>Tabelle und Spielplan</h1>
                <h1>Aktueller Kader</h1>
                <img alt='fußball-damen' src='/img/Fußball Damen/Mannschaftsfoto Damen.jpg' className='mannschaftsfoto'/>
                <h2>Trainer</h2>
                <h2>Torwart</h2>
                <h2>Abwehr</h2>
                <h2>Mittelfeld</h2>
                <h2>Angriff</h2>
            </>
        )
    }
}

export default FußballDamen