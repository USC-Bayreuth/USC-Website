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

    calcAge(birthdate) {
        const [day, month, year] = birthdate.split('.').map(Number);
        const birthDateObj = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    }


    render(){
        let kader=require('../../json/Volleyball Kader.json')
        return(
            <>
                <h1>Volleyball</h1>
                <Slider tag='Volleyball'/>
                <h1>Unsere Abteilung</h1>
                <p>Der USC Bayreuth e.V. stellt sich breiter auf und bietet seit dem SS 2023 Volleyball für Student*innen an der Universität Bayreuth an. Doch wer sind wir überhaupt? Wir sind eine junge, motivierte und semi-wettkampforientierte Hobby-Mixed-Mannschaft, bei der alle Spielerniveaus herzlich willkommen sind! Unser Ziel ist es, unsere Stärken auszubauen und unsere Fähigkeiten leistungsorientiert zu verbessern, ohne dabei den Spaß am Spiel zu verlieren. Bei uns wird das Mannschaftsgefühl großgeschrieben! Darum nehmen wir als Team an zahlreichen Liga- und Turnierspielen teil, wobei auch die Afterpartys nicht zu kurz kommen. Um der anspruchsvollen Sportart gerecht zu werden, legen wir viel Wert auf ein kontinuierliches Training, das an das jeweilige Spielerniveau angepasst wird. Daneben finden regelmäßig unter der Woche Freundschaftsspiele statt. Wenn du Lust hast, ein aktives Mitglied unserer Abteilung zu werden, komm gerne zu einem Probetraining vorbei.</p>
                <p>ACHTUNG: Aufgrund der großen Nachfrage müssen wir für vorübergehend einen Aufnahmestopp verhängen. Gerne kannst du dich schon mal in die Warteliste für das Jahr 2024 eintragen lassen, um beim offiziellen Volleyballbetrieb aufgenommen zu werden. Wir freuen uns auf dich!</p>
                <p>Bei weiteren Fragen wende dich jederzeit an unseren Abteilungsleiter Duc (<a className='link' href='mailto:volleyball@usc-bayreuth.de'>volleyball@usc-bayreuth.de</a>).</p>
                <h2>Trainingszeiten</h2>
                <p>Dienstag: 18:30 - 20:00 (Halle 2 und 3, <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Sportinstitut</a>)</p>
                <p style={{marginTop: 15}}>Freitag: 20:00 - 22:00 (Spielhalle, <a className='link' href='https://maps.app.goo.gl/DM2CvnAiZUbCKW2n8' target='_blank' rel='noreferrer'>Sportinstitut</a>)</p>
                
                <h1>Team</h1>
                
                <h2>Verantwortliche</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Verantwortliche.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                        {item.Bild===undefined && item.Geschlecht===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild===undefined && item.Geschlecht==="w" &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Volleyball/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        {item.Rolle!==undefined &&
                                            <p className='contact-subtitle-title'>{item.Rolle}</p>
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>
                                        {item.Mail!==undefined &&
                                            <p className='contact-subtitle'><a className='mail-to contact-subtitle' href={'mailto:'+item.Mail}>{item.Mail}</a></p>
                                        }
                                        {item.Handy!==undefined &&
                                            <p className='mobile-number contact-subtitle'>{item.Handy}</p>
                                        }
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <h2>Zuteller</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Zusteller.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>                                    
                                        {item.Bild===undefined && item.Geschlecht===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild===undefined && item.Geschlecht==="w" &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Volleyball/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>                                                                                
                                        <p className='contact-subtitle'>{item.Größe}</p>
                                        <p className='contact-subtitle'>Alter: {this.calcAge(item.Alter)}</p>                                
                                </Col>         
                            )
                        })}
                    </Row>
                </Container>
                <h2>Mittelblocker</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Mittelblocker.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>                                    
                                        {item.Bild===undefined && item.Geschlecht===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild===undefined && item.Geschlecht==="w" &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Volleyball/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>                                        
                                        <p className='contact-subtitle'>{item.Größe}</p>
                                        <p className='contact-subtitle'>Alter: {this.calcAge(item.Alter)}</p>                                
                                </Col>         
                            )
                        })}
                    </Row>
                </Container>
                <h2>Außenangreifer</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Außenangreifer.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>                                    
                                        {item.Bild===undefined && item.Geschlecht===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild===undefined && item.Geschlecht==="w" &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Volleyball/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>                                        
                                        <p className='contact-subtitle'>{item.Größe}</p>
                                        <p className='contact-subtitle'>Alter: {this.calcAge(item.Alter)}</p>                                
                                </Col>         
                            )
                        })}
                    </Row>
                </Container>
                <h2>Libero</h2>
                <Container fluid className='my-container'>
                    <Row>
                        {kader.Libero.map((item, index) =>{
                            return(
                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>                                    
                                        {item.Bild===undefined && item.Geschlecht===undefined &&
                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                        }
                                        {item.Bild===undefined && item.Geschlecht==="w" &&
                                            <img alt={'player'+index} src='/img/no-picture-woman.jpg' className='player-picture'/>
                                        }
                                        {item.Bild!==undefined &&
                                            <img alt={'player'+index} src={'/img/Volleyball/'+item.Bild} className='player-picture'/>                                    
                                        }
                                        <p className='contact-subtitle'>{item.Name}</p>                                        
                                        <p className='contact-subtitle'>{item.Größe}</p>
                                        <p className='contact-subtitle'>Alter: {this.calcAge(item.Alter)}</p>                                
                                </Col>         
                            )
                        })}
                    </Row>
                </Container>

                <h1>Unser Partner</h1>
                <a href='https://www.instagram.com/nachtisch_bt/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/nachtisch (2).png' alt='nachtisch' className='partner' style={{width:'20vw'}}/></a>
                <p></p>
                <a href='https://sushibayreuth.de/10811' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Mangolein.png' alt='mangolein' className='partner' style={{width:'20vw'}}/></a>

                
                                                
            </>
        )
    }
}

export default Volleyball