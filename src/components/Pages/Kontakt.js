import {Component} from 'react'

class Kontakt extends Component{

    render(){
        return(
            <>
                <h1>Kontakt</h1>
                <p>Hast du eine Frage, Anregung oder Kritik bezüglich unseres Vereins? Dann kontaktiere uns gerne über <a className='mail-to' href='mailto:info@usc-bayreuth.de'>info@usc-bayreuth.de</a>.</p>
                <p>Bei spezifischen Fragen wende dich bitte an den zuständigen <a className='link' href='/Verantwortliche'>Verantwortlichen</a>. Wir freuen uns auf deine Nachricht.</p>
            </>
        )
    }
}

export default Kontakt