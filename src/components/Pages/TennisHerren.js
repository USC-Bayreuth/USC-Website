import {Component} from 'react'
import Slider from '../Slider/Slider'
import {Container, Row, Col} from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'

class TennisHerren extends Component{
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
        let kader=require('../../json/Tennis Herren Kader.json')
        return(
            <>
                <h1>Tennis Herren</h1>
                <Slider tag='Tennis Herren'/>
                <h1>Unsere Abteilung</h1>
                <p>Servus aus der Tennisabteilung der Herren vom USC Bayreuth!</p>
                <p>Wir bieten Studenten die Möglichkeit, Erfahrungen im Tennis-Ligabetrieb zu sammeln. Seit der Saison 2022 haben wir eine 6er-Mannschaft beim Bayerischen Tennisverband (BTV) gemeldet und spielen in der Nordliga 3 (Gruppe 30). Im Sommer trainieren wir auf dem Hochschulsportgelände der Universität, im Winter in der Halle des TC Grün-Weiß Bayreuth e.V.</p>
                <p>Wir trainieren derzeit zusammen mit den Damen, da wir bei beiden Geschlechtern unterschiedliche Niveaus vertreten haben und so jeden bestmöglich fördern. Nicht nur innerhalb der Tennisabteilung, sondern auch innerhalb des gesamten USC organisieren wir gerne mal feucht fröhliche Team-Events, weshalb wir auch untereinander außerhalb des Trainings gut vernetzt sind.</p>
                <p>Aufgrund der begrenzten Platzkapazitäten können wir nur leider keine Tennis-Neulinge mehr aufnehmen. Im Idealfall hast du schon mehrere Jahre Tennistraining gehabt, hattest aber noch nicht die Chance, dein Können in Ligaspielen zu zeigen oder bist seit längerem nicht mehr in einer Mannschaft aktiv. Egal wie – Hauptsache du hast Bock, ein bisschen in einer jungen, motivierten und offenen Mannschaft mitzumischen!</p>
                <p>Melde dich bei Interesse gerne bei uns über <a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">Facebook</a>, <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">Instagram</a> oder am besten per Mail an <a className='link' href='mailto:tennis@usc-bayreuth.de'>tennis@usc-bayreuth.de</a>.</p>
                <h2>Trainingszeiten</h2>
                <p>Fortgeschrittene: Donnerstag, 20:00 - 21:30</p>
                <p style={{marginTop:5}}>Profis: Dienstag, 19:30 - 21:30</p>
                <p style={{marginTop:5}}>Freies Spiel: Freitag, 20:00 - 21:30</p>
                <p style={{marginTop:5}}>In der Halle von TC Grün-Weiß Bayreuth</p>
                <h1>Unser Partner</h1>
                <a href='https://www.raumedic.com/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/raumedic-Logo-weiß.png' alt='raumedic' className='partner'/></a>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    <iframe title='tabelle' src='https://btv.liga.nu/cgi-bin/WebObjects/nuLigaDokumentTENDE.woa/wa/nuDokument?dokument=ScheduleReportFOP&group=1743896&etag=e1db4b07-d07d-4576-a335-4061f769a440' frameBorder='0' className='widget'/>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                    <h1>Team</h1>
                    <img alt='tennis-herren' src='/img/Tennis Herren/Mannschaftsfoto_Herren.JPG' className='mannschaftsfoto'/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Trainer</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Trainer.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Tennis Herren/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                    </AnimationOnScroll>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Spieler</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Spieler.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Tennis Herren/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                    </AnimationOnScroll>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default TennisHerren