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
        let kader=require('../../json/Roundnet_Kader.json')
        return(
            <>
                <h1>Roundnet</h1>
                <p><b>Wir sind die Bayreuth Baboons – die Roundnet-Abteilung des USC Bayreuth.</b></p>
                <p>Vielleicht kennst du das „komische Trampolin-Spiel“ aus dem Park – besser bekannt unter dem Namen Spikeball – und hast es sogar schon selbst ausprobiert. Was du vielleicht noch nicht wusstest: Roundnet ist längst mehr als nur ein Freizeitspiel. In den letzten Jahren hat sich daraus ein rasant wachsender, mittlerweile international organisierter Sport entwickelt – mit Verband, Winterliga (1. Bundesliga, 2. Bundesliga, Regionalliga) und der German Roundnet Tour, einer bundesweiten Turnierserie im Sommer.</p>
                
                <p>Bei uns Baboons trainieren wir regelmäßig – mit dem Ziel, spielerisch besser zu werden. In unseren Trainings geht’s nicht nur ums Zocken, sondern auch um gezielte Übungen, mit denen wir wichtige Techniken und Spielverständnis entwickeln.</p>
                <p><b>Aber: Der Spaß und der Community-Gedanke stehen bei uns immer an erster Stelle.</b></p>
                <p>Egal ob Anfängerin oder erfahrener Spielerin – bei uns ist jeder willkommen! Wenn du also Lust hast, Roundnet über das Park-Niveau hinaus kennenzulernen, in einer motivierten Gruppe zu trainieren und dich spielerisch weiterzuentwickeln, dann melde dich gerne bei uns.</p>
                <p><b>Wir freuen uns auf dich – ganz egal auf welchem Level du einsteigst!</b></p>

                <h1>Trainingszeiten 2025</h1>
                <p style={{ marginTop: 10, fontSize: '14px' }}>ab Mai</p>              
                
                <p>Mittwoch 18:00 - Open End (<a className='link' href='https://www.google.de/maps/place/Hofgarten,+95444+Bayreuth/@49.9396724,11.5762312,1196m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47a1a2d163906ce5:0xfe65064915d0116c!8m2!3d49.9396591!4d11.580631!16s%2Fg%2F11bw3gxqpq?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' target='_blank' rel='noreferrer'>Hofgarten</a>)</p>

                <h1>Team</h1>
                <Container fluid className='my-container'>
                                    <Row>
                                        {kader.Verantwortliche.map((item, index) =>{
                                            return(
                                                <Col key={index} className={this.state.mobileMode? 'col-4' : 'col-3'}>
                                                    
                                                        {item.Bild===undefined &&
                                                            <img alt={'player'+index} src='/img/no-picture-man.jpg' className='player-picture'/>
                                                        }
                                                        {item.Bild!==undefined &&
                                                            <img alt={'player'+index} src={'/img/Roundnet/'+item.Bild} className='player-picture'/>                                    
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

                <h1>Kontakt</h1>
                <p>- Instagram: <a href="https://www.instagram.com/bayreuth.baboons" target="_blank" rel="noopener noreferrer">@bayreuth.baboons</a></p>
                <p>- oder per Mail, an eine Person aus dem Team 😊</p>

                <h1>Unser Partner</h1>
                <a href='https://www.naupaka.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/naupaka.png' alt='naupaka' className='partner' style={{width:'20vw'}}/></a>
                
            </>
        )
    }
}

export default Roundnet