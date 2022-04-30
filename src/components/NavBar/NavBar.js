import React, {Component} from 'react';
import './Navbar.css';
import {MenuItems} from "./MenuItems";
import Dropdown from './Dropdown';

class Navbar extends Component{
    state={clicked: false, dropdownIndex: -1, mobileMode: window.innerWidth<960}

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions=()=>{
        let newState=Object.assign(this.state)
        if(window.innerWidth>=960)
            newState.mobileMode=false
        else
            newState.mobileMode=true
        this.setState(newState)
    }

    //mobile menu
    handleMenuClick=()=>{
        let newState=Object.assign(this.state)
        newState.clicked=!newState.clicked
        this.setState(newState)
    }

    onMouseEnter=(index)=>{
        if(!this.state.mobileMode){
            let newState=Object.assign(this.state)
            newState.dropdownIndex=index
            this.setState(newState)
        }
    }

    onMouseLeave=()=>{
        if(!this.state.mobileMode){
            let newState=Object.assign(this.state)
            newState.dropdownIndex=-1
            this.setState(newState)
        }
    }
    
    render(){
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleMenuClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {!this.state.mobileMode &&
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
                    {this.state.mobileMode &&
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