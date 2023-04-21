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
                <p>Der USC stellt sich breiter auf und bietet ab diesem Sommersemester die Möglichkeit zum Hallen-Volleyball an. Bei Lust und Interesse komm gerne einfach zum Training vorbei. Ziel ist es, in der kommenden Saison mit einer Wettkampfmannschaft an den Start zu gehen. Jede/r ist willkommen, natürlich auch Anfänger!</p>
                <p>Melde dich bei Fragen jederzeit über unsere Social Media Kanäle (<a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">Facebook</a>, <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">Instagram</a>) oder bei <a className='link' href='mailto:info@usc-bayreuth.de'>info@usc-bayreuth.de</a>.</p>
                <h2>Trainingszeiten</h2>
                <p>Montag: 18:30 - 20:00 (Halle 2, Sportinstitut)</p>
                <h1>Team</h1>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                            <img src='/img/no-picture-man.jpg' className="contact-picture" alt="staff"/>
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