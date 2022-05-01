import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard'
import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './FußballHerren.css'

class FußballHerren extends Component{
    render(){
        let kader=require('../../json/Fußball Herren Kader.json')
        return(
            <>
                <h1>Fußball Herren</h1>
                <h1>Unsere Abteilung</h1>
                <p>Wir, die Herrenfußball-Abteilung des USC Bayreuth, heißen dich herzlich auf unserer Seite willkommen. Als Abteilung, aus welcher der USC entsprungen ist, bieten wir dir die Möglichkeit dich als Spieler, Funktionär oder in verschiedenen Bereichen rund um den Verein zu engagieren. Nach einigen Jahren in der Kreisklasse als SG Uni-Post SV Bayreuth gelang uns in der Saison 2015/16 und damit in der ersten Saison nach Gründung des USC der Aufstieg in die Kreisliga. Mit zwei überzeugenden Siegen auf großer Bühne konnten wir uns in den Relegationsspielen durchsetzen. Nachdem der erneute Aufstieg 16/17 denkbar knapp verpasst wurde, spielen wir aktuell in der Kreisliga Bayreuth/Kulmbach. Im Sommersemester haben wir das Privileg auf den hervorragenden Sportanlagen der Uni Bayreuth zu trainieren. Im Wintersemester, wenn die Uniplätze gesperrt sind, trainieren wir auf dem städtischen Kunstrasenplatz am Hans-Walter-Wild-Stadion, wo auch unsere Heimspiele ausgetragen werden, oder in der Turnhalle des Sportinstituts. Durch die hohe Fluktuation an Spielern sind wir immer auf der Suche nach neuem Personal. Wir freuen uns auf alle, die den Fußball genauso lieben wie wir. Bei Interesse vereinbare doch einfach ein Probetraining. Dafür kannst du entweder eine Facebook Nachricht senden oder eine Mail an <a className='mail-to' href='mailto:herrenfussball@uni-bayreuth.de'>herrenfussball@uni-bayreuth.de</a>.</p>
                <h1>Tabelle und Spielplan</h1>
                <h1>Aktueller Kader</h1>
                <img alt='fußball-herren' src='/img/Fußball Herren/Mannschaftsfoto Herren.jpg' className='mannschaftsfoto'/>
                <h2>Trainer</h2>
                <h2>Torwart</h2>
                <Container fluid className='my-container'>
                    <Row>
                {kader.Torwart.map((item, index) =>{
                    return(
<Col className='col-3'>
                            <img key={index} alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                        </Col>
                        
                    )
                })

                }
                </Row>
                </Container>
                <h2>Abwehr</h2>
                <h2>Mittelfeld</h2>
                <Container fluid className='my-container'>
                    <Row>
                {kader.Mittelfeld.map((item, index) =>{
                    return(
<Col className='col-3'>
                            <img key={index} alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                        </Col>
                        
                    )
                })

                }
                </Row>
                </Container>
                <h2>Angriff</h2>
            </>
        )
    }
}

export default FußballHerren