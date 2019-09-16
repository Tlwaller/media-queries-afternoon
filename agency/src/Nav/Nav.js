import React, {Component} from 'react';
import './Nav.css';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuOpenStatus: 'drop-down'
        }
    }

    toggle = () => {
        if (this.state.menuOpenStatus === 'drop-down-close' || this.state.menuOpenStatus === 'drop-down') {
            this.setState({menuOpenStatus: 'drop-down-open'});
        }else if (this.state.menuOpenStatus === 'drop-down-open') {
            this.setState({menuOpenStatus: 'drop-down-close'});
        }
    }

    render() {
        return (
            <>
                <nav>
                    <h1 id='title'>Start Bootstrap</h1>
                    <ul className='nav-items'>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                        <li className='hbgr hidden-by-default' onClick={this.toggle}>
                            MENU <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hbgr-btn'/>
                        </li>
                    </ul>
                </nav>

                <div className={`${this.state.menuOpenStatus} `}>
                    <h3>SERVICES</h3>
                    <h3>PORTFOLIO</h3>
                    <h3>ABOUT</h3>
                    <h3>TEAM</h3>
                    <h3>CONTACT</h3>
                </div>
            </>
        )
    }
}