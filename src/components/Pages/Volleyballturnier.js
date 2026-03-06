import {Component} from 'react'

class Volleyballturnier extends Component{
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
                <h1>3. Frühlingsturnier des USC Bayreuth {/*<p style={{ textAlign: 'left' }}>Samstag, 23. Mai 2026</p>*/}</h1>

                <p>Nach dem tollen Erfolg im letzten Jahr laden wir euch herzlich zum <b>dritten Frühlingsturnier des USC Bayreuth e.V.</b> ein! Das Turnier richtet sich an Hobby-Mixed-Teams – ganz im Sinne des Fairplays und des gemeinsamen Spaßes am Spiel.</p>

                <p>Um ein ausgewogenes sportliches Niveau zu gewährleisten, ist <b> pro Team maximal ein Passspieler erlaubt</b>. Bitte gebt daher bei der Anmeldung die <b>Spielernamen</b> zur Überprüfung an. Falls diese noch nicht feststehen, können sie später nachgereicht werden.</p>

                <p>Die Veranstaltung findet am <b>Samstag, den 23. Mai 2026 </b>statt. Die Halle öffnet für euch um 8:30 Uhr, die Begrüßung und der Spielbeginn folgen um <b>9:00 Uhr</b>. Das Turnier wird voraussichtlich gegen <b>20:00 Uhr</b> enden.</p>

                <p>Gespielt wird mit <b>16 Hobby-Mixed-Teams</b>, wobei <b>mindestens zwei Frauen und mindestens zwei Männer pro Team</b> gleichzeitig auf dem Feld stehen müssen. Zusätzlich muss jedes Team ein Schiedsgericht stellen (bestehend aus <b>1 Hauptschiedsrichter, 2 Linienrichtern und 1 Punkterichter</b>). Dafür sollten die offiziellen Regeln des DVV allen Beteiligten bekannt sein.</p>

                <p>Die <b>Teilnahmegebühr beträgt 45 Euro pro Team</b>. Sollte euer Team nicht antreten können, wird die Anmeldegebühr auf das uns bekannte Konto zurückerstattet, sofern eine Abmeldung bis zum <b>26. April 2026</b> erfolgt. Nach Ablauf dieser Frist ist keine Erstattung mehr möglich.</p>

                <p>Für die Verpflegung während des Turniers ist bestens gesorgt: Wir werden kulinarisch unterstützt von <b>Mangolein</b>, die ein liebevoll zusammengestelltes Buffet inklusive warmer Speisen anbieten, damit ihr zwischen den Spielen gut versorgt seid. Außerdem stellen wir euch gemeinsam mit der <b>Geseeser Landbäckerei Gebäck</b> belegte Brötchen gegen eine kleine Spende zur Verfügung</p>

                <p>Wir freuen uns auf einen sportlichen, fairen und fröhlichen Tag mit euch – seid dabei und macht das Frühlingsturnier auch dieses Jahr wieder zu einem besonderen Erlebnis!</p>

                <p>Für Anmeldungen und Rückfragen schreibt uns gerne an: <a className='link' href='mailto:volleyball@usc-bayreuth.de'>volleyball@usc-bayreuth.de</a></p>

                {/*
                <h1>Teilnehmer (bereits vollzählig)</h1>
                <p>1. USC Bayreuth</p>
                    <p>2. Heilsbronn Set-sationell</p>
                    <p>3. ATS Oberkotzau</p>
                    <p>4. Münchener Buben</p>
                    <p>5. BSV Bayreuth</p>
                    <p>6. Netz Fetz Bergtheim</p>
                    <p>7. Uni Bamberg</p>
                    <p>8. LeBron's Sonnenscheine</p>
                    <p>9. BTS Hobbymannschaft</p>
                    <p>10. NuB</p>
                    <p>11. IFL Bayreuth</p>
                    <p>12. Niemand</p>
                    <p>13. Schmerzgebirge Haue</p>
                    <p>14. Baddies</p>
                    <p>15. Oettifanten</p>
                    <p>16. Baggerbande</p>
                    */} 

                <h1>Unser Partner</h1>
                <a href='https://geseeser-landbaeckerei.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Landbäckerei.png' alt='Landbäckerei' className='partner' style={{width:'20vw'}}/></a>
                <p></p>
                <a href='https://sushibayreuth.de/10811' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Mangolein.png' alt='mangolein' className='partner' style={{width:'20vw'}}/></a>
                                            
            </>
        )
    }
}

export default Volleyballturnier