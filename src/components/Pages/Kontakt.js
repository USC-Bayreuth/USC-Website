import {Component} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Kontakt.css'

class Kontakt extends Component{
    render(){
        return(
            <>
            <h1>Kontakt</h1>
                <p>Für allgemeine Fragen wende dich gerne an <a className='mail-to' href='mailto:info@usc-bayreuth.de'>info@usc-bayreuth.de</a>. Wir freuen uns auf deine Nachricht.</p>
            <h1>Vorstand</h1>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className='contact-col col-3'>
                            <img src='/img/Kontakt/Joshua-Behr.jpg' className="contact-picture" alt="1. vorstand"/>
                            <p className='contact-subtitle-title'>1. Vorstand</p>
                            <p className='contact-subtitle'>Joshua Behr</p>
                            <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                        </Col>
                        <Col className='contact-col col-3'>
                            <img src='/img/Kontakt/Christian-Miller.jpg' className="contact-picture" alt="2. vorstand"/>
                            <p className='contact-subtitle-title'>2. Vorstand</p>
                            <p className='contact-subtitle'>Christian Miller</p>
                            <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                        </Col>
                        <Col className='contact-col col-3'>
                            <img src='/img/Kontakt/Ruben-Just.jpg' className="contact-picture" alt="2. vorstand"/>
                            <p className='contact-subtitle-title'>Vorstand Finance</p>
                            <p className='contact-subtitle'>Ruben Just</p>
                            <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                        </Col>
                        <Col className='contact-col col-3'>
                            <img src='/img/Kontakt/Oscar-Wenzel.jpg' className="contact-picture" alt="2. vorstand"/>
                            <p className='contact-subtitle-title'>Vorstand Legal</p>
                            <p className='contact-subtitle'>Oscar Wenzel</p>
                            <p className='contact-subtitle'>E-Mail: abc@e-mail.com</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Kontakt