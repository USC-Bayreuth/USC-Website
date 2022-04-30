import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class Roundnet extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <h1>Roundnet</h1>
                </Row>
                <Row>
                    <p>Wir bekommen Zuwachs durch die neu gegründete Abteilung "Roundnet" (Spikeball) und sind somit der erste Roundnet Verein Bayreuths!</p>
                    <p>Du zockst gerne Roundnet und hast Bock an strukturiertem Training sowie Teil der Community zu sein oder ab und an auf ein Turnier zu fahren? Dann komm vorbei und schnupper bei uns rein. Ab Mai beginnt das Training: Mo und Mi: 18.30 -20.30 Uhr auf den Fußballplätzen des Unisportgeländes!</p>          
                    <p>Bei Fragen meldet euch einfach <a className='mail-to' href='mailto:info@uni-bayreuth.de'>hier</a> oder bei <a className='mail-to' href='https://www.instagram.com/roundnet.bayreuth/'>@roundnet.bayreuth</a>.</p>
                </Row>
            </Container>
        )
    }
}

export default Roundnet