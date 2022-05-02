import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Verantwortliche.css'

class Verantwortliche extends Component{

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
            <h1>Vorstand</h1>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Joshua-Behr.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>1. Vorstand</p>
                        <p className='contact-subtitle'>Joshua Behr</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Christian-Miller.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>2. Vorstand</p>
                        <p className='contact-subtitle'>Christian Miller</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Ruben-Just.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Vorstand Finance</p>
                        <p className='contact-subtitle'>Ruben Just</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Oscar-Wenzel.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Vorstand Legal</p>
                        <p className='contact-subtitle'>Oscar Wenzel</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Jannik-Lockl.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Präsident und Gründer</p>
                        <p className='contact-subtitle'>Jannik Lockl</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                </Row>
            </Container>
            <h1>Trainerstab</h1>
            <h2>Fußball Herren</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Benjamin-Opel.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Trainer</p>
                        <p className='contact-subtitle'>Benjamin Opel</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                </Row>
            </Container>
            <h2>Fußball Damen</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Joshua-Behr.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Trainer</p>
                        <p className='contact-subtitle'>Joshua Behr</p>
                        <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Verantwortliche