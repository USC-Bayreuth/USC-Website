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
    
    render(){
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleMenuClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {window.innerWidth>=960 &&
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index} onMouseEnter={() => {
                                    this.onMouseEnter(index)
                                }} onMouseLeave={() => {
                                    this.onMouseLeave()
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
                        })
                    }
                    {window.innerWidth<960 &&
                        flattenMenuItems(MenuItems).map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className='nav-link' href={item.url}>
                                        {item.mobileTitle}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

function flattenMenuItems(menuItems, prefix){
    let flatMenuItems=[]
    menuItems.forEach(menuItem => {
        if(menuItem.cName==='nav-link' || menuItem.cName==='drop-nav-link')
            flatMenuItems.push(menuItem)
        else if(menuItem.cName==='nav-dropdown' || menuItem.cName==='drop-dropdown')
            flatMenuItems=flatMenuItems.concat(flattenMenuItems(menuItem.children))
    })
    return flatMenuItems
}

export default Navbar