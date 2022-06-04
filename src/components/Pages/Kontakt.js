import {Component} from 'react'

class Kontakt extends Component{

    render(){
        return(
            <>
                <h1>Kontakt</h1>
                <p>Für allgemeine Fragen wende dich gerne an <a className='mail-to' href='mailto:info@usc-bayreuth.de'>info@usc-bayreuth.de</a>.</p>
                <p>Für spezifische Fragen wende dich bitte an den zuständigen <a className='link' href='/Verantwortliche'>Verantwortlichen</a>. Wir freuen uns auf deine Nachricht.</p>
            </>
        )
    }
}

export default Kontakt