import React, {Component} from 'react';
import './Dropdown.css';

class DropDropdown extends Component{
    render(){
        if (this.props.appear)
            return(
                <ul className='dropdropdown-menu' style={{top: this.props.top}}>
                    {this.props.children.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            )
    }
}

export default DropDropdown