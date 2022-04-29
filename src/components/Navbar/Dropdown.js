import React, {Component} from 'react';
import './Dropdown.css';
import DropDropdown from './DropDropdown';

class Dropdown extends Component{
    state={clicked: false, dropdownIndex: -1}

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    onMouseEnter=(index)=>{
        if(window.innerWidth<960)
            this.setState({clicked: this.state.clicked, dropdownIndex: -1})
        else
            this.setState({clicked: this.state.clicked, dropdownIndex: index})
    }

    onMouseLeave=()=>{
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

    render(){
        if (this.props.appear)
            return(
                <ul onClick={this.handleClick} className={this.state.clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    {this.props.children.map((item, index) => {
                        return(
                            <li key={index} onMouseEnter={() => {
                                this.onMouseEnter(index)
                            }} onMouseLeave={() => {
                                this.onMouseLeave()
                            }}
                            onClick={() => {
                                this.handleMobileDropdownClick(index)
                            }}>
                                {item.cName==='drop-nav-link' &&
                                    <a className={item.cName} href={item.url} onClick={() => this.setState({clicked: false})}>
                                        {item.title}
                                    </a>
                                }
                                {item.cName==='drop-dropdown' &&
                                    <>
                                        <span className={item.cName}>
                                            {item.title} <i className='fas fa-caret-right' />
                                        </span>
                                        <DropDropdown children={item.children} appear={this.state.dropdownIndex===index} top={9+55*index}/>
                                    </>
                                }
                            </li>
                        )
                    })}
                </ul>
            )
    }
}

export default Dropdown