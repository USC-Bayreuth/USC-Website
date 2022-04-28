import React, {Component, useState} from 'react';
import {MenuItems} from './MenuItems';
import './Dropdown.css';

class Dropdown extends Component{
    state={clicked: false}

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <ul onClick={this.handleClick}
            className={this.state.clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {this.props.children.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>

                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Dropdown