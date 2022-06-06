import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Team.css'
import Slider from '../Slider/Slider'
import { AnimationOnScroll } from 'react-animation-on-scroll';

class FußballHerren extends Component{
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
        let kader=require('../../json/Fußball Herren Kader.json')
        return(
            <>
                <h1>Fußball Herren</h1>
                <Slider tag='Fußball Herren'/>
                <h1>Unsere Abteilung</h1>
                <p>Wir, die Herrenfußball-Abteilung des USC Bayreuth, heißen dich herzlich auf unserer Seite willkommen. Als Abteilung, aus welcher der USC entsprungen ist, bieten wir dir die Möglichkeit dich als Spieler, Funktionär oder in verschiedenen Bereichen rund um den Verein zu engagieren. Nach einigen Jahren in der Kreisklasse als SG Uni-Post SV Bayreuth gelang uns in der Saison 2015/16 und damit in der ersten Saison nach Gründung des USC der Aufstieg in die Kreisliga. Mit zwei überzeugenden Siegen auf großer Bühne konnten wir uns in den Relegationsspielen durchsetzen. Nachdem der erneute Aufstieg 16/17 denkbar knapp verpasst wurde, spielen wir aktuell in der Kreisliga Bayreuth/Kulmbach. Im Sommersemester haben wir das Privileg auf den hervorragenden Sportanlagen der Uni Bayreuth zu trainieren. Im Wintersemester, wenn die Uniplätze gesperrt sind, trainieren wir auf dem städtischen Kunstrasenplatz am Hans-Walter-Wild-Stadion, wo auch unsere Heimspiele ausgetragen werden, oder in der Turnhalle des Sportinstituts. Durch die hohe Fluktuation an Spielern sind wir immer auf der Suche nach neuem Personal. Wir freuen uns auf alle, die den Fußball genauso lieben wie wir. Bei Interesse vereinbare doch einfach ein Probetraining. Dafür kannst du entweder eine Facebook Nachricht senden oder eine Mail an <a className='mail-to' href='mailto:herrenfussball@uni-bayreuth.de'>herrenfussball@uni-bayreuth.de</a>.</p>                
                <h2>Trainingszeiten</h2>
                <p>Dienstag und Freitag: 18:30 - 20:00 Sportinstitut</p>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    {this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62726b5448f17&start=tabelle&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62722a97357d5&start=spielplan&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                    {!this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62726b5448f17&start=tabelle&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                                <Col>
                                    <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62722a97357d5&start=spielplan&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                    <h1>Kader</h1>
                    <img alt='fußball-herren' src='/img/Fußball Herren/Mannschaftsfoto Herren.jpg' className='mannschaftsfoto'/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Abteilungsleiter</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                            <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                <img alt='department-leader' src='/img/no-picture-man.jpg' className='player-picture'/>
                                <p className='player-name'>Max Mustermann</p>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                </Container>
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
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='player-name'>{item.Name}</p>
                                        {item.Rolle!==undefined &&
                                            <p className='role'>{item.Rolle}</p>
                                        }
                                        {item.Handy!==undefined &&
                                            <p className='mobile-number'>Handy: {item.Handy}</p>
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
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
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
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
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
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
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
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!=='' &&
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
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

export default FußballHerren