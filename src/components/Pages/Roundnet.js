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
                <h1>Unsere Abteilung</h1>
                <p>Wir bekommen Zuwachs durch die neu gegründete Abteilung "Roundnet" (Spikeball) und sind somit der erste Roundnet Verein Bayreuths!</p>
                <p>Du zockst gerne Roundnet und hast Bock an strukturiertem Training sowie Teil der Community zu sein oder ab und an auf ein Turnier zu fahren? Dann komm vorbei und schnupper bei uns rein. Ab Mai beginnt das Training: Mo und Mi: 18.30 -20.30 Uhr auf den Fußballplätzen des Unisportgeländes!</p>          
                <p>Bei Fragen meldet euch einfach <a className='mail-to' href='mailto:info@uni-bayreuth.de'>hier</a> oder bei <a className='mail-to' href='https://www.instagram.com/roundnet.bayreuth/'>@roundnet.bayreuth</a>.</p>
                <h2>Trainingszeiten</h2>
                <h1>Tabelle und Spielplan</h1>
                <h1>Team</h1>
                <h1>Abteilungsleiter</h1>
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
            </>
        )
    }
}

export default Roundnet