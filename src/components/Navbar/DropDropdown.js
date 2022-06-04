import React, {Component} from 'react';
import './Dropdown.css';

class DropDropdown extends Component{
    render(){
        if (this.props.appear){
            let pathname=window.location.pathname
            let activeDropdownItem
            this.props.children.forEach((child, index) => {
                if(activeDropdownItem===undefined && child.cName==='drop-nav-link' && child.url===pathname)
                    activeDropdownItem=index
            })
            return(
                <ul className='dropdropdown-menu' style={{top: this.props.top}}>
                    {this.props.children.map((item, index) => {
                        return(
                            <li key={index} className={index===activeDropdownItem?'active-dropdown-item':''}>
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
}

export default DropDropdown