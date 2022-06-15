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
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:joshua.behr@uni-bayreuth.de'>joshua.behr@uni-bayreuth.de</a></p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Christian-Miller.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>2. Vorstand</p>
                        <p className='contact-subtitle'>Christian Miller</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:cmiller95@web.de'>cmiller95@web.de</a></p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Ruben-Just.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Vorstand Finance</p>
                        <p className='contact-subtitle'>Ruben Just</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:ruben.just@uni-bayreuth.de'>ruben.just@uni-bayreuth.de</a></p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Oscar-Wenzel.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Vorstand Legal</p>
                        <p className='contact-subtitle'>Oscar Wenzel</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:oscarwenzel@me.com'>oscarwenzel@me.com</a></p>
                    </Col>
                </Row>
            </Container>
            <h1>Abteilungen</h1>
            <h2>Fußball Herren</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/no-picture-man.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Abteilungsleiter</p>
                        <p className='contact-subtitle'>Jonathan Weyel</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='herrenfussball@usc-bayreuth.de'>herrenfussball@usc-bayreuth.de</a></p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Benjamin-Opel.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Cheftrainer</p>
                        <p className='contact-subtitle'>Benjamin Opel</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='benjaminopel@web.de'>benjaminopel@web.de</a></p>
                        <p className='contact-subtitle mobile-number'>0173 5747526</p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/no-picture-man.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Co-Trainer</p>
                        <p className='contact-subtitle'>Franz Wittmann</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='wittmannfranz@gmx.de'>wittmannfranz@gmx.de</a></p>
                    </Col>
                </Row>
            </Container>
            <h2>Fußball Damen</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/no-picture-woman.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Abteilungsleiterin</p>
                        <p className='contact-subtitle'>Laila Auerochs</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='damenfussball@usc-bayreuth.de'>damenfussball@usc-bayreuth.de</a></p>
                    </Col>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Joshua-Behr.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Cheftrainer</p>
                        <p className='contact-subtitle'>Joshua Behr</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:joshua.behr@uni-bayreuth.de'>joshua.behr@uni-bayreuth.de</a></p>
                        <p className='contact-subtitle mobile-number'>01575 0662674</p>
                    </Col>
                </Row>
            </Container>
            <h2>Tennis</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/no-picture-woman.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Abteilungsleiterin</p>
                        <p className='contact-subtitle'>Alexandra Hubracht</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:alexandra.hubracht@uni-bayreuth.de'>alexandra.hubracht@uni-bayreuth.de</a></p>
                    </Col>
                </Row>
            </Container>
            <h2>Roundnet</h2>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/no-picture-man.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Abteilungsleiter</p>
                        <p className='contact-subtitle'>Daniel Kroh</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:roundnet.bayreuth@gmail.com'>roundnet.bayreuth@gmail.com</a></p>
                    </Col>
                </Row>
            </Container>
            <h1>Präsident und Gründer</h1>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Jannik-Lockl.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Präsident und Gründer</p>
                        <p className='contact-subtitle'>Jannik Lockl</p>
                    </Col>
                </Row>
            </Container>
            <h1>Webmaster</h1>
            <Container fluid className='my-container'>
                <Row>
                    <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                        <img src='/img/Verantwortliche/Stefan-Am-Ende.jpg' className="contact-picture" alt="staff"/>
                        <p className='contact-subtitle-title'>Webmaster</p>
                        <p className='contact-subtitle'>Stefan Am Ende</p>
                        <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:stefan.amende2000@gmail.com'>stefan.amende2000@gmail.com</a></p>
                    </Col>
                </Row>
            </Container>
            <p style={{marginTop: 60, fontWeight: 'bolder'}}>Sonstige Kontaktaufnahme auch über unsere Social-Media-Kanäle</p>
            <p style={{marginTop: 5}}>Facebook: <a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">USC Bayreuth</a></p>
            <p style={{marginTop: 5}}>Instagram: <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">@usc_bayreuth</a>, <a className='link' href='https://www.instagram.com/roundnet.bayreuth/' target="_blank" rel="noreferrer">@roundnet.bayreuth</a></p>
            </>
        )
    }
}

export default Verantwortliche