import {Component} from 'react'

class UnsereSponsoren extends Component{
    render(){
        return(
            <>
                <h1>Premiumpartner</h1>
                <a href='https://www.rehau.com/de-de' target="_blank" rel="noreferrer"><img src='/img/Sponsoren/Rehau-logo.png' alt='rehau' className='partner'/></a>
                <h1>Classicpartner</h1>
                <a href='https://www.dynamic-bayreuth.de/' target='_blank' rel='noreferrer'><img className='partner' src='/img/Sponsoren/white_greydynamic_logo.png' alt='dynamic fitness'/></a>
                <div/>
                <img className='partner' src='/img/Sponsoren/rönn_dr_rönn_stein.png' alt='kanzlei'/>
                <h1>Partner</h1>
                <h2>Fußball Herren</h2>
                <a href='https://purehardseltzer.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/PURE-Logo.png' alt='pure' className='partner'/></a>
                <div/>
                <a href='https://fabrik-bayreuth.com/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Fabrik.png' alt='fabrik' className='partner'/></a>
                <h2>Fußball Damen</h2>
                <a href='https://www.hausarztpraxis-bayreuth.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/moos_willner.png' alt='moos_willner' className='partner'/></a>
                <h2>Tennis</h2>
                <a href='https://www.raumedic.com/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/raumedic-Logo-weiß.png' alt='raumedic' className='partner'/></a>
                <h2>Roundnet</h2>
                <a href='https://www.naupaka.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/naupaka.png' alt='naupaka' className='partner' style={{width:'20vw'}}/></a>
                <h2>Volleyball</h2>
                <a href='https://sushibayreuth.de/10811' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Mangolein.png' alt='mangolein' className='partner' style={{width:'20vw'}}/></a>
                <a href='https://www.instagram.com/nachtisch_bt/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/nachtisch (2).png' alt='nachtisch' className='partner' style={{width:'20vw'}}/></a>
                <h1>Teamausrüster</h1>
                <a href='https://usc-bayreuth.fan12.de/' target='_blank' rel='noreferrer'><img src='/img/Sponsoren/Fan12_Logo_RGB.png' className='partner' alt='fan-12-logo'/></a>
            </>
        )
    }
}

export default UnsereSponsoren