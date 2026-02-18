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
                <h1>3. Frühlingsturnier des USC Bayreuth {/*<p style={{ textAlign: 'left' }}>Samstag, 24. Mai 2025</p>*/}</h1>
                <h2>Weitere Infos werden demnächst bekanntgegeben</h2>

                {/*<p>Nach dem tollen Erfolg im letzten Jahr laden wir euch herzlich zum <b>zweiten Frühlingsturnier des USC Bayreuth e.V.</b> ein! Das Turnier richtet sich an Hobby-Mixed-Teams – ganz im Sinne des Fairplays und des gemeinsamen Spaßes am Spiel.</p>

                <p>Um das sportliche Niveau ausgewogen zu halten, sind <b>keine Passspieler erwünscht.</b></p>

                <p>Die Veranstaltung findet am <b>Samstag, den 24. Mai 2025 </b>statt. Die Halle öffnet für euch um 8:30 Uhr, die Begrüßung und der Spielbeginn folgen um <b>9:00 Uhr</b>. Das Turnier wird voraussichtlich gegen <b>19:00 Uhr</b> enden.</p>

                <p>Gespielt wird mit <b>16 Hobby-Mixed-Teams</b> (bereits vollzählig), wobei <b>mindestens zwei Frauen pro Team</b> gleichzeitig auf dem Feld stehen müssen. Die <b>Teilnahmegebühr beträgt 35 Euro pro Team</b>, zusätzlich wird eine <b>Kaution von 15 Euro</b> erhoben, die bei der Anmeldung vor Ort in bar zurückerstattet wird.</p>

                <p>Für die Verpflegung während des Turniers ist bestens gesorgt: Wir werden kulinarisch unterstützt von <b>Foé</b> und <b>Mangolein</b>, die ein liebevoll zusammengestelltes Buffet inklusive warmer Speisen anbieten, damit ihr zwischen den Spielen gut versorgt seid.</p>

                <p>Und wer nach einem sportlichen Tag noch Energie übrig hat, darf sich freuen – <b>nach dem Turnier steigt die Afterparty im NachTisch!</b> Dort lassen wir gemeinsam den Tag bei guter Musik und bester Stimmung ausklingen.</p>

                <p>Wir freuen uns auf einen sportlichen, fairen und fröhlichen Tag mit euch – seid dabei und macht das Frühlingsturnier auch dieses Jahr wieder zu einem besonderen Erlebnis!</p>

                <p>Für Anmeldungen und Rückfragen schreibt uns gerne an: <a className='link' href='mailto:volleyball@usc-bayreuth.de'>volleyball@usc-bayreuth.de</a></p>

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

                <h1>Unser Partner</h1>
                <a href='https://www.instagram.com/nachtisch_bt/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/nachtisch (2).png' alt='nachtisch' className='partner' style={{width:'20vw'}}/></a>
                <p></p>
                <a href='https://sushibayreuth.de/10811' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Mangolein.png' alt='mangolein' className='partner' style={{width:'20vw'}}/></a>
                 */}                            
            </>
        )
    }
}

export default Volleyballturnier