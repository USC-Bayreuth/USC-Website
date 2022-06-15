import {Component} from 'react'
import './NewsPage.css'
import {Container} from 'react-bootstrap'

class NewsPage extends Component{
    render(){
        let news=require('../../json/News.json')
        let post=news[this.props.index]
        return(
            <>
                <h1>{post.title}</h1>
                <p className='date'>{post.date}</p>
                {post.blocks.map((item, index) => {
                    if(item.length>=8 && item.substring(0, 7)==='!image '){
                        let substring=item.substring(7, item.length)
                        let filenames=substring.split('|')
                        return(
                            <Container key={index} fluid className='my-container'>
                                {filenames.map((file, fileIndex) => {
                                    return(
                                        <img key={fileIndex} className='head-image' src={'/img/News/'+file} alt='news-pic'/>
                                    )
                                })}
                            </Container>
                        )
                    }
                    else
                        return(
                            <p key={index} className={index===0? 'first-block':''}>{item}</p>
                        )
                })}
            </>
        )
    }
}

export default NewsPage