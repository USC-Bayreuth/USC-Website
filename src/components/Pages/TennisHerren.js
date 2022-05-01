import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class TennisHerren extends Component{
    render(){
        return(
            <>
                <h1>Tennis Herren</h1>
                <p>Der USC ist dabei eine Tennisabteilung zu etablieren! Dafür werden insbesondere für unsere Herrenmannschaft noch einige erfahrene Tennisspieler für den Ligabetrieb gesucht!</p>
                <p>Training: Montags, 19h00-20h30 und 20h30 bis 22h00</p>
                <p>Wenn du also Interesse, Erfahrung, Lust und Zeit hast, dann melde dich einfach bei uns!</p>
                <p>Caro: 01525 4280162</p>
                <p style={{marginTop: '2px'}}>Alexandra: 0162 7106823</p>
            </>
        )
    }
}

export default TennisHerren