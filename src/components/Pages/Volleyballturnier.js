import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Slider from '../Slider/Slider'

class Volleyballturnier extends Component{
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
                <h1>Turnierinfos</h1>
                <p>- am 04.05.2024</p>
                <p>- BaySpo Halle 1-3, vss. von 9-20 Uhr</p>
                <p>- insgesamt 8 Mannschaften</p>
                <p>- für Versorgung während des Turniers ist gesorgt + Afterparty </p>
                
                <h1>Teamanmeldung</h1>
                <p>- nach dem Prinzip first come first serve </p>
                <p>- bis Bezirksliga erlaubt, reine Hobbymannschaft erwünscht </p>
                <p>- min. 2 Frauen pro Team </p>
                <p>- Teilnahmegebühr pro Team 25 € für Studenten/ 30 € für Externe </p>
                <p>- 15 € Kaution (ist nach Anmeldebestätigung zu zahlen)</p>
                <p>- Anmeldung an Volleyball@usc-bayreuth.de</p>


                <h1>Unser Partner</h1>
                <a href='https://www.instagram.com/nachtisch_bt/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/nachtisch (2).png' alt='nachtisch' className='partner' style={{width:'20vw'}}/></a>
                <p></p>
                <a href='https://sushibayreuth.de/10811' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Mangolein.png' alt='mangolein' className='partner' style={{width:'20vw'}}/></a>

                
                                                
            </>
        )
    }
}

export default Volleyballturnier