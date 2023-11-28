import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class Roundnet extends Component{
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
                <h1>Roundnet</h1>
                <p>Wir bekommen Zuwachs durch die neu gegründete Abteilung "Roundnet" (Spikeball) und sind somit der erste Roundnet Verein Bayreuths!</p>
                <p>Du zockst gerne Roundnet und hast Bock an strukturiertem Training sowie Teil der Community zu sein oder ab und an auf ein Turnier zu fahren? Dann komm vorbei und schnupper bei uns rein.</p>          
                <p>Bei Fragen meldet euch einfach bei <a className='link' href='mailto:roundnet.bayreuth@gmail.com'>roundnet.bayreuth@gmail.com</a> oder bei <a className='link' target="_blank" rel="noreferrer" href='https://www.instagram.com/bayreuth.baboons/'>@bayreuth.baboons</a>.</p>
                <h2>Trainingszeiten (Winter)</h2>
                <p>Dienstag 20:00 - 22:00 (<a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Halle Sportinstitut</a>)</p>
                <p style={{marginTop: 15}}>Mittwoch 15:30 - 17:00 (<a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Halle Sportinstitut</a>)</p>
                <p style={{marginTop: 15}}>Samstag 10:00 - 12:00 (<a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Halle Sportinstitut</a>)</p>
                <h1>Unser Partner</h1>
                <a href='https://www.naupaka.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/naupaka.png' alt='naupaka' className='partner' style={{width:'20vw'}}/></a>
                <h1>Team</h1>
                <Container fluid className='my-container'>
                    <Row>
                        <Col className={this.state.mobileMode? 'col-4' : 'col-3'}>
                            <img src='/img/no-picture-man.jpg' className="contact-picture" alt="staff"/>
                            <p className='contact-subtitle-title'>Abteilungsleiter</p>
                            <p className='contact-subtitle'>James Killas</p>
                            <p className='contact-subtitle'><a className='mail-to contact-subtitle' href='mailto:roundnet.bayreuth@gmail.com'>roundnet.bayreuth@gmail.com</a></p>
                            <p className='contact-subtitle mobile-number'>0177 4563854</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Roundnet