import {Component} from 'react'
import Carousel from 'react-elastic-carousel'
import {Col} from 'react-bootstrap'
import './Slider.css'
import {createURL} from '../../App.js'

class Slider extends Component{
    render(){
        let news=require('../../json/News.json')
        return(
            <Carousel className='news-slider'>
                {// eslint-disable-next-line
                news.map((item, index) => {
                    const itemTags=item.tags.split('|')
                    if(this.props.tag==='Allgemein' || itemTags.includes(this.props.tag)){
                        const sliderImages=item.sliderImage.split('|')
                        let sliderImage
                        if(this.props.tag==='Allgemein')
                            sliderImage=sliderImages[0]
                        else
                            sliderImage=sliderImages[itemTags.indexOf(this.props.tag)]
                        return(
                            <Col key={index}>
                                <a style={{textDecoration:'none'}} href={'/News/'+createURL(item.title)}>
                                    <img className='slider-image' src={'/img/News/'+sliderImage} alt={'slider-'+index}/>
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