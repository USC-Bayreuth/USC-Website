import {Component} from 'react'
import './WerdeMitglied.css'

class WerdeMitglied extends Component{
    render(){
        return(
            <>
                <h1>Werde Mitglied</h1>
                <h2>Beitragssätze</h2>
                <p>Der Beitragssatz für eure Mitgliedschaft beim USC Bayreuth setzt sich aus einem Grundbeitrag und einem oder mehreren Abteilungsbeiträgen zusammen. Diese sind jeweils abhängig von eurem Status (Studierender, Beschäftigter oder Alumni/Externer). Falls ihr Mitglied bei mehreren Abteilungen werden möchtet, muss der höhere Abteilungsbeitrag voll gezahlt werden und der/die niedrigere(n) nur zur Hälfte. (Beispiel für eine Mitgliedschaft eines Studenten in den Abteilungen Tennis und Fußball: 20€ Grundbeitrag + 110€ Abteilungsbeitrag Tennis (voll) + 22,50€ Abteilungsbeitrag Fußball (hälftig) = 152,50€)</p>
                <p>Auch nach dem Beitritt zum Verein ist ein zusätzlicher Beitritt zu einer neuen Abteilung oder ein Austritt aus einer Abteilung (falls mehrere gewählt wurden) jederzeit möglich. In diesem Fall müsste nur der Mitgliedsantrag angepasst werden. Wende dich in diesem Fall bitte zu einem der <a className='link' href='/Verantwortliche'>Abteilungsleiter</a> der entsprechenden Abteilung.</p>
                <p>Falls ein Mitglied erst nach dem 1.7. eines Jahres beitritt, muss für das restliche Jahr nur die Hälfte des Abteilungsbeitrags gezahlt werden (jedoch der volle Grundbeitrag).</p>
                <img src='/img/Werde Mitglied/Mitgliedsbeiträge.png' className='beitragssätze' alt='Beitragssätze'/>
                <h2>Mitgliedsantrag</h2>
                <p>Wurde dein Interesse geweckt? <a target="_blank" rel="noreferrer" href='/download/aufnahmeantrag_usc_bayreuth.pdf' className='link'>Hier</a> findest du unseren Mitgliedsantrag. Wende dich bitte damit zum <a className='link' href='/Verantwortliche'>Verantwortlichen</a> der entsprechenden Abteilung.</p>
            </>
        )
    }
}

export default WerdeMitglied