import {Component} from 'react'

class UnsereSponsoren extends Component{
    render(){
        return(
            <>
                <h1>Unser Premiumpartner</h1>
                    <a href='https://www.rehau.com/de-de' target="_blank" rel="noreferrer"><img src='/img/Home/Rehau-logo.png' alt='rehau' className='partner'/></a>
                <h1>Classicpartner</h1>
                <h1>Partner</h1>
                <h1>Weitere Unterstützer</h1>
                <p><a className='mail-to' style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.bowling-burger.de/'>BluBowl Bayreuth</a></p>
                <p style={{marginTop: '5px'}}><a className='mail-to' style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.facebook.com/pages/Genie%C3%9Fer-Ecke-Bayreuth/461348953963901'>Genießer-Ecke</a></p>
                <p style={{marginTop: '5px'}}><a className='mail-to' style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.lamperie.de/'>Lamperie/Lamperium</a></p>
                <p style={{marginTop: '5px'}}><a className='mail-to' style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href='http://le2lanterne.de/'>Le 2 Lanterne</a></p>
                <h1>Teamausrüster</h1>
            </>
        )
    }
}

export default UnsereSponsoren