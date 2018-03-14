import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.scss';
import bulb from './public/bulb.png';
import controller from './public/controller.png';

class Home extends PureComponent {
    constructor(props){
        super(props);
        this._handleDropdownClick = this._handleDropdownClick.bind(this)
        this.state = {
            dropdownVisible: false
        }
    }

    _handleDropdownClick() {
        this.state.dropdownVisible === false ? this.setState({dropdownVisible: true}) : this.setState({dropdownVisible: false})
    }
    render() {
        return <div className="home">
            <h1 className="_title">Yarn</h1>
            <div className="_button-container" onClick={this._handleDropdownClick}>
                <img className="_button -build" src={bulb} alt="build link"/>
                <h3 className="_link-label">Build!</h3>
            </div>
            { this.state.dropdownVisible === true ?
            <div className="_nav-menu">
                <NavLink to="/new">
                    <h6 className="_link-label">new</h6>
                </NavLink>
                <NavLink to="/storylist">
                    <h6 className="_link-label">existing</h6>
                </NavLink>
            </div> :
            null
            }
            <NavLink to="/storylist">
                <div className="_button-container">
                    <img className="_button -play" src={controller} alt="play link"/>
                    <h3 className="_link-label">Play!</h3>
                </div>
            </NavLink>
        </div>;
    }
}

export default Home;
