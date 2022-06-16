import {Component} from 'react'

class UnsereSponsoren extends Component{
    render(){
        return(
            <>
                <h1>Unser Premiumpartner</h1>
                    <a href='https://www.rehau.com/de-de' target="_blank" rel="noreferrer"><img src='/img/Home/Rehau-logo.png' alt='rehau' className='partner'/></a>
                <h1>Classicpartner</h1>
                <h1>Partner</h1>
                <h1>Teamausrüster</h1>
                <a href='https://usc-bayreuth.fan12.de/' target='_blank' rel='noreferrer'>
                    <img src='/img/Home/Fan12_Logo_RGB.png' className='partner' alt='fan-12-logo'/>
                </a>
            </>
        )
    }
}

export default UnsereSponsoren