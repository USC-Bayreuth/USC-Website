import React, {Component} from 'react';
import './Navbar.css';
import {MenuItems} from "./MenuItems";
import Dropdown from './Dropdown';

const mobileThreshold=1050;

class Navbar extends Component{
    state={clicked: false, dropdownIndex: -1, dropDropdownIndex: -1, mobileMode: window.innerWidth<mobileThreshold}

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions=()=>{
        let newState=Object.assign(this.state)
        if(window.innerWidth>=mobileThreshold)
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

    handleMobileDropdownClick=(index)=>{
        if(this.state.mobileMode){
            let newState=Object.assign(this.state)
            newState.dropDropdownIndex=-1
            if(index===this.state.dropdownIndex)
                newState.dropdownIndex=-1
            else
                newState.dropdownIndex=index
            this.setState(newState)
        }
    }

    handleMobileDropDropdownClick=(index)=>{
        if(this.state.mobileMode){
            let newState=Object.assign(this.state)
            if(index===this.state.dropDropdownIndex)
                newState.dropDropdownIndex=-1
            else
                newState.dropDropdownIndex=index
            this.setState(newState)
        }
    }
    
    render(){
        let pathname=window.location.pathname
        let activeNavItem
        MenuItems.forEach((item, index) => {
            if(item.cName==='nav-link' && item.url===pathname)
                activeNavItem=index
            else if(activeNavItem===undefined && item.cName==='nav-dropdown'){
                item.children.forEach(child => {
                    if(activeNavItem===undefined && child.cName==='drop-nav-link' && child.url===pathname)
                        activeNavItem=index
                    else if(activeNavItem===undefined && child.cName==='drop-dropdown'){
                        child.children.forEach(child => {
                            if(activeNavItem===undefined && child.cName==='drop-nav-link' && child.url===pathname)
                                activeNavItem=index
                        })
                    }
                })
            }
        })
        return(
            <nav className="NavbarItems">
                <div style={{backgroundColor:'#302f2f'}} className="menu-icon" onClick={this.handleMenuClick}>
                    <i style={{backgroundColor:'#302f2f'}} className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul style={{backgroundColor:'#302f2f', zIndex: '1'}} className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {!this.state.mobileMode &&
                        MenuItems.map((item, index) => {
                            return (
                                <li style={{backgroundColor:'#302f2f'}} key={index} onMouseEnter={() => {
                                    this.onMouseEnter(index)
                                }} onMouseLeave={() => {
                                    this.onMouseLeave()
                                }}>
                                    {item.cName==='nav-link' &&
                                        <a className={item.cName+(index===activeNavItem?' active-navbar-item':'')} href={item.url}>
                                            {item.title}
                                        </a>
                                    }
                                    {item.cName==='nav-dropdown' &&
                                        <>
                                            <span className={item.cName+(index===activeNavItem?' active-navbar-item':'')}>
                                                {item.title} <i style={{background: 'transparent'}} className='fas fa-caret-down'/>
                                            </span>
                                            <Dropdown children={item.children} appear={this.state.dropdownIndex===index}/>
                                        </>
                                    }
                                    {item.cName==='external-link' &&
                                        <a rel="noreferrer" target="_blank" className='nav-link' href={item.url}>
                                            {item.title}
                                        </a>
                                    }
                                </li>
                            )
                        })
                    }
                    {this.state.mobileMode &&
                        MenuItems.map((item, index) =>{
                            return(
                                <li style={{backgroundColor: '#302f2f'}} key={index}>
                                    {item.cName==='nav-link' &&
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    }
                                    {item.cName==='nav-dropdown' &&
                                        <>
                                            <span className={item.cName} onClick={()=>{
                                                this.handleMobileDropdownClick(index)
                                            }}>
                                                {item.title}
                                                {this.state.dropdownIndex===index &&
                                                    <i style={{background: 'transparent'}} className='fas fa-caret-up'/>
                                                }
                                                {this.state.dropdownIndex!==index &&
                                                    <i style={{background: 'transparent'}} className='fas fa-caret-down'/>
                                                }
                                            </span>
                                            {this.state.dropdownIndex===index &&
                                                item.children.map((item, index) =>{
                                                    return(
                                                        <>
                                                            {item.cName==='drop-nav-link' &&
                                                                <a className={item.cName} href={item.url} style={{backgroundColor:'#262322'}}>
                                                                    {item.title}
                                                                </a>
                                                            }
                                                            {item.cName==='drop-dropdown' &&
                                                                <>
                                                                    <span className={item.cName} style={{backgroundColor:'#262322'}} onClick={()=>{
                                                                        this.handleMobileDropDropdownClick(index)
                                                                    }}>
                                                                        {item.title}
                                                                        {this.state.dropDropdownIndex===index &&
                                                                            <i style={{background: 'transparent'}} className='fas fa-caret-up'/>
                                                                        }
                                                                        {this.state.dropDropdownIndex!==index &&
                                                                            <i style={{background: 'transparent'}} className='fas fa-caret-down'/>
                                                                        }
                                                                    </span>
                                                                    {this.state.dropDropdownIndex===index &&
                                                                        item.children.map((item, index) =>{
                                                                            return(
                                                                                <>
                                                                                    {item.cName==='drop-nav-link' &&
                                                                                        <a className={item.cName} href={item.url} style={{backgroundColor:'#0f0e0e'}}>
                                                                                            {item.title}
                                                                                        </a>
                                                                                    }
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar