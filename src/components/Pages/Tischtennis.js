import {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
        let kader = require('../../json/Tischtennis Kader.json')
        return(
            <>
                <h1>Tischtennis</h1>
               
                <>
                    <p>
                        Wir freuen uns, die Tischtennisabteilung des Universitäts-Sportclub Bayreuth e.V. vorzustellen!
                        Seit der Vereinsgründung im Jahr 2025 entwickelt sich unsere Abteilung stetig weiter und
                        geht in der Saison 2026/27 bereits mit drei Mannschaften im Ligabetrieb an den Start.
                        Unsere Teams treten in der Bezirksklasse B, Bezirksklasse C und Bezirksklasse D des
                        Bezirks Oberfranken-Ost an und sammeln zusätzlich wertvolle Erfahrungen im Bezirkspokal.
                        [
                        <a
                            href="https://www.mytischtennis.de/click-tt/ByTTV/26--27/verein/206095/Universit%C3%A4ts-Sportclub_Bayreuth_e.V./mannschaften"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            myTischtennis.de
                        </a>]
                    </p>

                    <p>
                        Diese Entwicklung zeigt, wie dynamisch unser Sportangebot wächst.
                        Neben der sportlichen Leistung stehen bei uns Teamgeist, Gemeinschaft
                        und die Freude am Tischtennis im Mittelpunkt. Sowohl ambitionierte
                        Wettkampfspieler als auch Neueinsteiger finden bei uns die Möglichkeit,
                        sich sportlich weiterzuentwickeln und Teil einer motivierten Mannschaft zu werden.
                    </p>

                    <p>
                        Für die kommenden Jahre möchten wir unsere erfolgreiche Entwicklung fortsetzen,
                        weitere Mitglieder für den Tischtennissport begeistern und die Abteilung
                        nachhaltig ausbauen. Langfristig sind zusätzliche Mannschaften sowie
                        eine intensive Nachwuchsarbeit wichtige Bestandteile unserer Vereinsziele.
                    </p>

                    <p>
                        Wer Interesse am Tischtennis hat, ist jederzeit herzlich eingeladen,
                        bei einem Training vorbeizuschauen und Teil unserer Gemeinschaft zu werden.
                    </p>
                </>

               <h1>Team</h1>
               <img alt='Tischtennis' src='/img/Tischtennis/Teamfoto USC TT.jpg' className='mannschaftsfoto'/>


                <h2>Ansprechpartner</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Ansprechpartner.map((item, index) => {
                            return (
                                
                                <Col key={index} className='col-sm-3 tischtennis-contact'>
                                    {item.Bild===undefined && item.Geschlecht===undefined &&
                                        <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                    }
                                    {item.Bild===undefined && item.Geschlecht==="w" &&
                                        <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                    }
                                    {item.Bild!==undefined &&
                                        <img alt={'player'+index} src={'/img/Tischtennis/'+item.Bild} className='player-picture'/>
                                    }

                                    <div style={{textAlign: 'left'}}>
                                        <p className='contact-subtitle' style={{textAlign: 'left'}}>
                                            {item.Name}
                                        </p>
                                        <p style={{textAlign: 'left', overflowWrap: 'normal'}}>
                                            E-Mail: <a className='link' href={'mailto:' + item.Mail}>
                                                {item.Mail}
                                            </a>
                                        </p>
                                        <p style={{textAlign: 'left'}}>
                                            Mobil: <a className='link' href={'tel:' + item.Mobil.replace(/\s/g, '')}>
                                                {item.Mobil}
                                            </a>
                                        </p>
                                    </div>
                                </Col>

                            )
                        })}
                    </Row>
                </Container>

 
 
            <h1> Trainingszeiten (Sommersemester)</h1>
                   <p> Montag 20:00-22:00*</p>
                   <p> Mittwoch 17:30-19:00*</p>
                   
                    <p style={{textAlign: 'center',fontSize: '0.8rem',marginTop: '2rem'}}>*Spielhalle 1 - <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' tyle={{color: 'inherit', textDecoration: 'none',font: 'inherit', fontSize: '0.8rem' }}target='_blank' rel='noreferrer'>Sportinstitut</a> </p>                      
                                        </>
        )
    }
}

export default Tischtennis