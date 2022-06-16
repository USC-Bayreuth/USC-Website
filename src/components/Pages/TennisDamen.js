import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Slider from '../Slider/Slider'

class TennisDamen extends Component{
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
        let kader=require('../../json/Tennis Damen Kader.json')
        return(
            <>
                <h1>Tennis Damen</h1>
                <Slider tag='Tennis Damen'/>
                <h1>Unsere Abteilung</h1>
                <p>Der USC ist dabei eine Tennisabteilung zu etablieren! Dafür werden insbesondere für unsere Damenannschaft noch einige erfahrene Tennisspielerinnen für den Ligabetrieb gesucht!</p>
                <p>Wenn du also Interesse, Erfahrung, Lust und Zeit hast, dann melde dich einfach bei uns!</p>
                <p>Caro: 01525 4280162</p>
                <p style={{marginTop: 5}}>Alexandra: 0162 7106823</p>
                <h2>Trainingszeiten</h2>
                <p>Dienstag: 18:00 - 19:00 und 19:00 - 20:00</p>
                <p style={{marginTop:5}}>Freitag: 10:00 - 12:00, 18:00 - 19:00 und 19:00 - 20:00</p>
                <p style={{marginTop:5}}>Auf den Plätzen des Sportinstituts</p>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    <iframe title='tabelle' src='https://btv.liga.nu/cgi-bin/WebObjects/nuLigaDokumentTENDE.woa/wa/nuDokument?dokument=ScheduleReportFOP&group=1749916&etag=08bddd99-0f10-4468-897f-5425a050714f' frameBorder='0' className='widget'/>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                    <h1>Abteilungsleiterin</h1>
                </AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                            <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                <img src='/img/no-picture-woman.jpg' className="contact-picture" alt="staff"/>
                                <p className='contact-subtitle-title'>Abteilungsleiterin</p>
                                <p className='contact-subtitle'>Alexandra Hubracht</p>
                                <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:tennis@usc-bayreuth.de'>tennis@usc-bayreuth.de</a></p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h1>Team</h1></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Tennis Damen/'+item.Bild} className='player-picture'/>                                    
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

export default TennisDamen