import {Component} from 'react'
import './Home.css'
import Slider from '../Slider/Slider'
import {Container, Row, Col} from 'react-bootstrap'

class Home extends Component{
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
                <h1>Homepage des USC Bayreuth</h1>
                <Slider tag='Allgemein'/>
                <h1>Der Verein</h1>
                <p>Herzlich Willkommen auf der Homepage des USC Bayreuth! Der USC Bayreuth wurde 2015 als Verein von Studierenden für Studierende gegründet. Zunächst als Fußballverein gedacht, wuchs der Verein seit seiner Gründung stark an und umfasst mit seinen knapp 200 Mitgliedern mittlerweile vier Abteilungen: Fußball, Tennis, Volleyball und Roundnet. </p>
                <p>Als Studentenverein gewährt der USC ein familiäres, freundliches und respektvolles Umfeld. Es bietet sich besonders für Neulinge an der Universität und in Bayreuth die Möglichkeit an, durch den Sport Kontakte zu knüpfen und Freunde zu finden. Im Einklang dazu stehen auch die Werte und die Philosophie des USC: Wir sind ein Verein für alle Menschen, ungeachtet der sozialen oder kulturellen Herkunft oder des Geschlechts.</p>
                <h1>Unser Premiumpartner</h1>
                <a href='https://www.rehau.com/de-de' rel="noreferrer" target="_blank">
                    <img src='/img/Sponsoren/Rehau-logo.png' alt='rehau' className='partner'/>
                </a>
                <h1>Social Media</h1>
                <Container className='my-container' fluid>
                    <Row>
                        <Col>
                            <a href='https://www.facebook.com/uscbayreuth/' target="_blank" rel="noreferrer">
                                <i className={this.state.mobileMode? "fab fa-facebook fa-3x social-media-icon" : "fab fa-facebook fa-5x social-media-icon"}/>
                            </a>
                            <a href='https://www.instagram.com/usc_bayreuth/' target="_blank" rel="noreferrer">
                                <i className={this.state.mobileMode? "fab fa-instagram fa-3x social-media-icon" : "fab fa-instagram fa-5x social-media-icon"}/>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <h1>Onlineshop</h1>
                    <a href='https://usc-bayreuth.fan12.de/' target='_blank' rel='noreferrer'>
                        <img src='/img/Sponsoren/Fan12_Logo_RGB.png' className='partner' alt='fan-12-logo'/>
                    </a>
            </>
        )
    }
}

export default Home