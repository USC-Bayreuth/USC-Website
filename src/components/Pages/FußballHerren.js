import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './FußballHerren.css'
import Slider from '../Slider/Slider'

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
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    {this.state.mobileMode &&
                        <>
                            <Row>
                                <Col>
                                    <iframe src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62726b5448f17&start=tabelle&header=0&navi=0' frameBorder='0' className='fupa-widget'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <iframe src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62722a97357d5&start=spielplan&header=0&navi=0' frameBorder='0' className='fupa-widget'/>
                                </Col>
                            </Row>
                        </>
                    }
                    {!this.state.mobileMode &&
                        <>
                        <Row>
                            <Col>
                                <iframe src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62726b5448f17&start=tabelle&header=0&navi=0' frameBorder='0' className='fupa-widget'/>
                            </Col>
                            <Col>
                                <iframe src='https://www.fupa.net/fupa/widget.php?p=iframe_widget&typ=team&value_id=961238&div_id=widget_62722a97357d5&start=spielplan&header=0&navi=0' frameBorder='0' className='fupa-widget'/>
                            </Col>
                        </Row>
                        </>
                    }
                </Container>
                <h1>Aktueller Kader</h1>
                <img alt='fußball-herren' src='/img/Fußball Herren/Mannschaftsfoto Herren.jpg' className='mannschaftsfoto'/>
                <h2>Trainer</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Trainer.map((item, index) =>{
                                return(
                                    <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                        <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                                        <p className='player-name'>{item.Name}</p>
                                    </Col>
                            
                                )
                        })}
                    </Row>
                </Container>
                <h2>Torwart</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Torwart.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                                    <p className='player-name'>{item.Name}</p>
                                </Col>
                        
                            )
                        })}
                    </Row>
                </Container>
                <h2>Abwehr</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Abwehr.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                                    <p className='player-name'>{item.Name}</p>
                                </Col>
                        
                            )
                        })}
                    </Row>
                </Container>
                <h2>Mittelfeld</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Mittelfeld.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                                    <p className='player-name'>{item.Name}</p>
                                </Col>
                        
                            )
                        })}
                    </Row>
                </Container>
                <h2>Angriff</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Angriff.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    <img alt={'player'+index} src={'/img/Fußball Herren/'+item.Bild} className='player-picture'/>
                                    <p className='player-name'>{item.Name}</p>
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