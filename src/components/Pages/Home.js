import {Component} from 'react'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <>
                <h1>Homepage des USC Bayreuth</h1>
                <h1>Unser Premiumpartner</h1>
                <img src='/img/Home/Rehau-logo.png' alt='rehau' className='partner'/>
            </>
        )
    }
}

export default Home