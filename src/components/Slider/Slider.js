import {Component} from 'react'
import Carousel from 'react-elastic-carousel'
import {Col} from 'react-bootstrap'
import './Slider.css'

class Slider extends Component{
    render(){
        let news=require('../../json/News.json')
        return(
            <Carousel className='news-slider'>
                {// eslint-disable-next-line
                news.map((item, index) => {
                    if(item.tag===this.props.tag || this.props.tag==='Allgemein'){
                        return(
                            <Col key={index}>
                                <a style={{textDecoration:'none'}} href={'News-'+index}>
                                    <img className='slider-image' src={'/img/News/'+item.image} alt={'slider-'+index}/>
                                    <p className='slider-headline'>{item.title}</p>
                                </a>
                            </Col>
                        )
                    }
                })}
            </Carousel>
        )
    }
}

export default Slider