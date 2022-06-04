import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <Container fluid className='footer-container'>
                <Row>
                    <Col>
                        <a className='footer-link' href='/Kontakt'>Kontakt</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className='footer-link' href='/Impressum'>Impressum</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className='footer-link' href='/Datenschutz'>Datenschutz</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer