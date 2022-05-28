import {Component} from 'react'
import './NewsPage.css'

class NewsPage extends Component{
    render(){
        let news=require('../../json/News.json')
        let post=news[this.props.index]
        return(
            <>
                <h1>{post.title}</h1>
                {post.image!=='' &&
                    <img className='head-image' src={'/img/News/'+post.headImage} alt={'head'}/>
                }
                <p className='date'>{post.date}</p>
                {post.blocks.map((item, index) => {
                    if(item.length>=8 && item.substring(0, 7)==='!image ')
                        return(
                            <img key={index} className='head-image' src={'/img/News/'+item.substring(7, item.length)} alt='news-pic'/>
                        )
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