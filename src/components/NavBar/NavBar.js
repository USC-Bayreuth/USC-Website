import React, {Component} from 'react';
import './Navbar.css';
import {MenuItems} from "./MenuItems";
import Dropdown from './Dropdown';

class Navbar extends Component{
    state={clicked: false, dropdownIndex: -1}

    //mobile menu
    handleMenuClick=()=>{
        this.setState({clicked: !this.state.clicked, dropdown: this.state.dropdownIndex})
    }

    onMouseEnter=(index)=>{
        if(window.innerWidth>=960)
            this.setState({clicked: this.state.clicked, dropdownIndex: index})
    }

    onMouseLeave=()=>{
        if(window.innerWidth>=960)
            this.setState({clicked: this.state.clicked, dropdownIndex: -1})
    }

    handleMobileDropdownClick=(index)=>{
        if(window.innerWidth<960){
            if (this.state.dropdownIndex!==-1)
                this.setState({clicked: this.state.clicked, dropdownIndex: -1})
            else
                this.setState({clicked: this.state.clicked, dropdownIndex: index})
        }
        else
            this.setState({clicked: this.state.clicked, dropdownIndex: -1})
    }

    //Bei mobile menu in css: position: relative
    render(){
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleMenuClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onMouseEnter={() => {
                                this.onMouseEnter(index)
                            }} onMouseLeave={() => {
                                this.onMouseLeave()
                            }} onClick={() => {
                                this.handleMobileDropdownClick(index)
                            }}>
                                {item.cName==='nav-link' &&
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                }
                                {item.cName==='nav-dropdown' &&
                                    <>
                                        <span className={item.cName}>
                                            {item.title} <i className='fas fa-caret-down'/>
                                        </span>
                                        <Dropdown children={item.children} appear={this.state.dropdownIndex===index}/>
                                    </>
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar