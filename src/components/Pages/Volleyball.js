import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Slider from '../Slider/Slider'

class Volleyball extends Component{
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
                <h1>Volleyball</h1>
                <Slider tag='Volleyball'/>
                <h1>Unsere Abteilung</h1>
                <p>Der USC Bayreuth e.V. stellt sich breiter auf und bietet seit dem SS 2023 Volleyball für Student*innen an der Universität Bayreuth an. Doch wer sind wir überhaupt? Wir sind eine junge, motivierte und semi-wettkampforientierte Hobby-Mixed-Mannschaft, bei der alle Spielerniveaus herzlich willkommen sind! Unser Ziel ist es, unsere Stärken auszubauen und unsere Fähigkeiten leistungsorientiert zu verbessern, ohne dabei den Spaß am Spiel zu verlieren. Bei uns wird das Mannschaftsgefühl großgeschrieben! Darum nehmen wir als Team an zahlreichen Liga- und Turnierspielen teil, wobei auch die Afterpartys nicht zu kurz kommen. Um der anspruchsvollen Sportart gerecht zu werden, legen wir viel Wert auf ein kontinuierliches Training, das an das jeweilige Spielerniveau angepasst wird. Wir trainieren derzeit 2x die Woche, jeweils montags und donnerstags von 19:30 bis 21:30 Uhr. Daneben finden regelmäßig unter der Woche Freundschaftsspiele statt. Wenn du Lust hast, ein aktives Mitglied unserer Abteilung zu werden, komm gerne zu einem Probetraining vorbei.</p>
                <p>ACHTUNG: Aufgrund der großen Nachfrage müssen wir für vorübergehend einen Aufnahmestopp verhängen. Gerne kannst du dich schon mal in die Warteliste für das Jahr 2024 eintragen lassen, um beim offiziellen Volleyballbetrieb aufgenommen zu werden. Wir freuen uns auf dich!</p>
                <p>Bei weiteren Fragen wende dich jederzeit an unseren Abteilungsleiter Duc (<a className='link' href='mailto:volleyball@usc-bayreuth.de'>volleyball@usc-bayreuth.de</a>).</p>
                <h2>Trainingszeiten</h2>
                <p>Mittwoch: 20:00 - 22:00 (Halle 3, <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Sportinstitut</a>)</p>
                <p style={{marginTop: 15}}>Samstag: 12:00 - 14:00 (kleine Turnhalle, <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Sportinstitut</a>)</p>
                <h1>Team</h1>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                            <img src='/img/Verantwortliche/Duc-Nguyen.jpg' className="contact-picture" alt="staff"/>
                            <p className='contact-subtitle-title'>Abteilungsleiter</p>
                            <p className='contact-subtitle'>Duc Viet Nguyen</p>
                            <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:volleyball@usc-bayreuth.de'>volleyball@usc-bayreuth.de</a></p>
                            <p className='contact-subtitle mobile-number'>0171 2393629</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Volleyball