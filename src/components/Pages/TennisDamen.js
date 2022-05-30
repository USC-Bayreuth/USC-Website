import {Component} from 'react'
import {Container} from 'react-bootstrap'

class TennisDamen extends Component{
    render(){
        return(
            <>
                <h1>Tennis Damen</h1>
                <p>Der USC ist dabei eine Tennisabteilung zu etablieren! Dafür werden insbesondere für unsere Damenannschaft noch einige erfahrene Tennisspielerinnen für den Ligabetrieb gesucht!</p>
                <p>Training: Montags, 19h00-20h30 und 20h30 bis 22h00</p>
                <p>Wenn du also Interesse, Erfahrung, Lust und Zeit hast, dann melde dich einfach bei uns!</p>
                <p>Caro: 01525 4280162</p>
                <p style={{marginTop: '2px'}}>Alexandra: 0162 7106823</p>
                <h1>Tabelle und Spielplan</h1>
                <Container fluid className='my-container'>
                    <iframe title='tabelle' src='https://btv.liga.nu/cgi-bin/WebObjects/nuLigaDokumentTENDE.woa/wa/nuDokument?dokument=ScheduleReportFOP&group=1749916&etag=08bddd99-0f10-4468-897f-5425a050714f' frameBorder='0' className='widget'/>
                </Container>
            </>
        )
    }
}

export default TennisDamen