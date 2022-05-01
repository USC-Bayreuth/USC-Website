import React, {Component} from 'react';
import './Dropdown.css';
import DropDropdown from './DropDropdown';

class Dropdown extends Component{
    state={dropdownIndex: -1}

    onMouseEnter=(index)=>{
        if(window.innerWidth<960)
            this.setState({dropdownIndex: -1})
        else
            this.setState({dropdownIndex: index})
    }

    onMouseLeave=()=>{
        this.setState({dropdownIndex: -1})
    }

    render(){
        if (this.props.appear)
            return(
                <ul style={{background: 'transparent', zIndex: '1'}} className={this.state.clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    {this.props.children.map((item, index) => {
                        return(
                            <li key={index} onMouseEnter={() => {
                                this.onMouseEnter(index)
                            }} onMouseLeave={() => {
                                this.onMouseLeave()
                            }}>
                                {item.cName==='drop-nav-link' &&
                                    <a className={item.cName} href={item.url} onClick={() => this.setState({clicked: false})}>
                                        {item.title}
                                    </a>
                                }
                                {item.cName==='drop-dropdown' &&
                                    <>
                                        <span style={{background: 'transparent'}} className={item.cName}>
                                            {item.title} <i style={{background: 'transparent'}} className='fas fa-caret-right' />
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