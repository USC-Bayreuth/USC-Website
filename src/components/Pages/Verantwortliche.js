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
        if(window.innerWidth>=1100)
            newState.mobileMode=false
        else
            newState.mobileMode=true
        this.setState(newState)
    }

    render(){
        let verantwortliche=require('../../json/Verantwortliche.json')
        return(
            <>
            <h1>Vorstand</h1>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Vorstand.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <h1>Abteilungen</h1>
            <h2>Fußball</h2>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Fußball.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <h2>Tennis</h2>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Tennis.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <h2>Roundnet</h2>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Roundnet.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <h2>Volleyball</h2>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Volleyball.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <h2>Tischtennis</h2>
            <Container fluid className='my-container'>
                <Row>
                    {verantwortliche.Tischtennis.map((item, index) => {
                        return(
                            <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                {item.Bild === undefined && item.Geschlecht === "w" &&
                                    <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild === undefined && item.Geschlecht !== "w" &&
                                    <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                }
                                {item.Bild !== undefined &&
                                    <img src={item.Bild} className="contact-picture" alt="staff"/>
                                }
                                <p className="contact-subtitle-title">{item.Rolle}</p>
                                <p className="contact-subtitle">{item.Name}</p>
                                {item.Mail !== undefined &&
                                    <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                }
                                {item.Handy !== undefined &&
                                    <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                }
                            </Col>
                        )
                    })}
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
                    {verantwortliche.Webmaster.map((item, index) => {
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                    {item.Bild === undefined && item.Geschlecht === "w" &&
                                        <img src="/img/no-picture-woman.jpg" className="contact-picture" alt="staff"/>
                                    }
                                    {item.Bild === undefined && item.Geschlecht !== "w" &&
                                        <img src="/img/no-picture-man.jpg" className="contact-picture" alt="staff"/>
                                    }
                                    {item.Bild !== undefined &&
                                        <img src={item.Bild} className="contact-picture" alt="staff"/>
                                    }
                                    <p className="contact-subtitle-title">{item.Rolle}</p>
                                    <p className="contact-subtitle">{item.Name}</p>
                                    {item.Mail !== undefined &&
                                        <p className="contact-subtitle"><a className="mail-to contact-subtitle" href={`mailto:${item.Mail}`}>{item.Mail}</a></p>
                                    }
                                    {item.Handy !== undefined &&
                                        <p className='contact-subtitle mobile-number'>{item.Handy}</p>
                                    }
                                </Col>
                            )
                        })}
                </Row>
            </Container>
            <p style={{marginTop: 60, fontWeight: 'bolder'}}>Sonstige Kontaktaufnahme auch über unsere Social-Media-Kanäle</p>
            <p style={{marginTop: 5}}>Facebook: <a className='link' href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">USC Bayreuth</a></p>
            <p style={{marginTop: 5}}>Instagram: <a className='link' href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">@usc_bayreuth</a>, <a className='link' href='https://www.instagram.com/roundnet.bayreuth/' target="_blank" rel="noreferrer">@roundnet.bayreuth</a></p>
            <p style={{marginTop: 5}}>Oder über <a className='link' href='mailto:info@usc-bayreuth.de'>info@usc-bayreuth.de</a></p>
            </>
        )
    }
}

export default Verantwortliche