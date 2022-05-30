import {Component} from 'react'
import Slider from '../Slider/Slider'
import {Container} from 'react-bootstrap'

class TennisHerren extends Component{
    render(){
        return(
            <>
                <h1>Tennis Herren</h1>
                <Slider tag='Tennis Herren'/>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    <iframe title='tabelle' src='https://btv.liga.nu/cgi-bin/WebObjects/nuLigaDokumentTENDE.woa/wa/nuDokument?dokument=ScheduleReportFOP&group=1743896&etag=e1db4b07-d07d-4576-a335-4061f769a440' frameBorder='0' className='widget'/>
                </Container>
            </>
        )
    }
}

export default TennisHerren