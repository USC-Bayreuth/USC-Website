import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Team.css'
import Slider from '../Slider/Slider'
import { AnimationOnScroll } from 'react-animation-on-scroll';

class FußballDamen extends Component{
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
        let kader=require('../../json/Fußball Damen Kader.json')
        return(
            <>
                <h1>Fußball Damen</h1>
                <Slider tag='Fußball Damen'/>
                <h1>Unsere Abteilung</h1>
                <p>Die Frauenfußballabteilung des USC Bayreuth bietet Studentinnen die Möglichkeit, ihre sportlichen Ziele zu erreichen, ihre Soft-Skills zu stärken und ihr Netzwerk zu erweitern. Zwei Trainingseinheiten während der Saison, ein Spiel am Wochenende, jede Menge Team-Events und sowohl die Winter- als auch die Sommervorbereitung stellen einen perfekten Ausgleich für den oft trägen Unialltag. Nach dem Aufstieg in der Premierensaison 17/18 und drei Saisons in der Kreisliga, geht die Frauen-Mannschaft in der Saison 22/23 nun in der Bezirksliga an den Start. Du möchtest dich darüber hinaus aktiv mit einbringen? 4 Ressorts, darunter Organisation, Media, Sponsoring oder Events bieten dir die Möglichkeit dazu. Kommilitonen. Freunde. Teamkollegen. Bei mittlerweile über 50 Spielerinnen fällt der Kontakt nicht schwer. Haben wir dein Interesse geweckt? Dann komm vorbei – Wir freuen uns auf neue Gesichter! Melde dich einfach bei <a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">Facebook</a>, <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">Instagram</a> oder per Mail an <a className='mail-to' href='mailto:damenfussball@usc-bayreuth.de'>damenfussball@usc-bayreuth.de</a>.</p>
                <h2>Trainingszeiten</h2>
                <p>Dienstag und Donnerstag: 18:30 - 20:00 Sportinstitut</p>
                <h1>Unsere Partner</h1>
                <a href='https://www.hausarztpraxis-bayreuth.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/moos_willner.png' alt='moos_willner' className='partner'/></a>
                <div/>
                <a href='https://www.allfinanz-dvag.de/sebastian.krause/index.html' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Sebastian_Krause.png' alt='dvag' className='partner'/></a>
                <div/>
                <a href='https://www.dynamic-bayreuth.de/' target='_blank' rel='noreferrer'><img className='partner' src='/img/Sponsoren/white_greydynamic_logo.png' alt='dynamic fitness'/></a>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    {this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1077843&div_id=widget_62dfabfc0bb53&start=tabelle&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1077843&div_id=widget_62dfac552688a&start=spielplan&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                    {!this.state.mobileMode &&
                        <>
                        <Row>
                            <Col>
                                <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1077843&div_id=widget_62dfabfc0bb53&start=tabelle&header=0&navi=0' frameBorder='0' className='widget widget-fußball-damen'/>
                            </Col>
                            <Col>
                                <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1077843&div_id=widget_62dfac552688a&start=spielplan&header=0&navi=0' frameBorder='0' className='widget widget-fußball-damen'/>
                            </Col>
                        </Row>
                        </>
                    }
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                    <h1>Team</h1>
                    <img alt='fußball-damen' src='/img/Fußball Damen/Mannschaftsfoto Damen.jpg' className='mannschaftsfoto'/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Trainer</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Trainer.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Damen/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        {item.Rolle!==undefined &&
                                            <p className='contact-subtitle-title'>{item.Rolle}</p>
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>
                                        {item.Mail!==undefined &&
                                            <p className='contact-subtitle'><a className='mail-to contact-subtitle' href={'mailto:'+item.Mail}>{item.Mail}</a></p>
                                        }
                                        {item.Handy!==undefined &&
                                            <p className='mobile-number contact-subtitle'>{item.Handy}</p>
                                        }
                                    </AnimationOnScroll>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Torwart</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Torwart.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Damen/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                    </AnimationOnScroll>
                                </Col>
                        
                            )
                        })}
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Abwehr</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Abwehr.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Damen/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                    </AnimationOnScroll>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Mittelfeld</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Mittelfeld.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Damen/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                    </AnimationOnScroll>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Angriff</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Angriff.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild==='' &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Damen/'+item.Bild} className='player-picture'/>                                    
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

export default FußballDamen