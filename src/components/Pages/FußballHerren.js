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
                <p>Wir, die Herrenfußballabteilung des USC Bayreuth, heißen dich herzlich auf unserer Seite willkommen. Als erste Abteilung, die dem USC entsprungen ist, bieten wir dir die Möglichkeit dich als Spieler, Funktionär oder in verschiedenen Bereichen rund um den Verein zu engagieren. Nach einigen Jahren in der Kreisklasse als Spielgemeinschaft Uni-Post SV Bayreuth gelang uns in der Saison 2015/16 und damit in der ersten Saison nach Gründung des USC der Aufstieg in die Kreisliga. Mit zwei überzeugenden Siegen auf großer Bühne konnten wir uns in den Relegationsspielen durchsetzen. Nachdem der erneute Aufstieg 2016/17 denkbar knapp verpasst wurde, spielen wir aktuell seit nunmehr sechs Jahren ununterbrochen in der Kreisliga Bayreuth/Kulmbach. Im Sommersemester haben wir das Privileg auf den hervorragenden Sportanlagen der Uni Bayreuth trainieren zu können. Im Wintersemester, wenn die Uni-Plätze gesperrt sind, trainieren wir auf dem städtischen Kunstrasenplatz am Hans-Walter-Wild Stadion, wo auch unsere Heimspiele ausgetragen werden, oder in der Turnhalle des Sportinstituts. Durch die hohe Fluktuation an Spielern sind wir immer auf der Suche nach neuem Personal. Wir freuen uns auf alle, die den Fußball genauso lieben wie wir. Bei Interesse melde dich doch einfach bei uns und schau ins Training vorbei. Melde dich dafür bei unserem Trainer Kamal Abdi oder per Mail an <a className='link' href='mailto:herrenfussball@usc-bayreuth.de'>herrenfussball@usc-bayreuth.de</a>. Alternativ kannst du uns auch per Nachricht über unsere Social-Media-Kanäle (<a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">Facebook</a>, <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">Instagram</a>) erreichen.</p>
                <h2>Trainingszeiten</h2>
                <p>Freitag 20:00 - 22:00 Halle Sportinstitut</p>
                <h1>Unser Partner</h1>
                <a href='https://purehardseltzer.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/PURE-Logo.png' alt='pure' className='partner'/></a>
                <div/>
                <a href='https://fabrik-bayreuth.com/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Fabrik.png' alt='fabrik' className='partner'/></a>
                <div/>
                <a href='https://www.dynamic-bayreuth.de/' target='_blank' rel='noreferrer'><img className='partner' src='/img/Sponsoren/white_greydynamic_logo.png' alt='dynamic fitness'/></a>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    {this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1031545&div_id=widget_62c32f526458d&start=tabelle&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1031545&div_id=widget_62c32ec466334&start=spielplan&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                    {!this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe title='tabelle' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1031545&div_id=widget_62c32f526458d&start=tabelle&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                                <Col>
                                    <iframe title='spielplan' src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=1031545&div_id=widget_62c32ec466334&start=spielplan&header=0&navi=0' frameBorder='0' className='widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                </Container>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                    <h1>Team</h1>
                    <img alt='fußball-herren' src='/img/Fußball Herren/Mannschaftsfoto Herren.jpg' className='mannschaftsfoto'/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn={this.props.animation} animateOnce><h2>Trainer</h2></AnimationOnScroll>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Trainer.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <AnimationOnScroll animateIn={this.props.animation} animateOnce>
                                        {item.Bild===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>                                    
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
                                        {item.Bild===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
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
                                        {item.Bild===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
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
                                        {item.Bild===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
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
                                        {item.Bild===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
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