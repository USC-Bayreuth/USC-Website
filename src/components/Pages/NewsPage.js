import {Component} from 'react'
import './NewsPage.css'

class NewsPage extends Component{
    render(){
        let news=require('../../json/News.json')
        let post=news[this.props.index]
        return(
            <>
                <h1>{post.title}</h1>
                <img className='head-image' src={'/img/News/'+post.image} alt={'head'}/>
                <p className='date'>{post.date}</p>
                {post.blocks.map((item, index) => {
                    return(
                        <p key={index} className={index===0? 'first-block':''}>{item}</p>
                    )
                })}
            </>
        )
    }
}

export default NewsPage