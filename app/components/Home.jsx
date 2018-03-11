import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.scss';
import bulb from './public/bulb.png';
import controller from './public/controller.png';

class Home extends PureComponent {
      constructor(props){
        super(props);
        this._handleLinkView = this._handleLinkView.bind(this);
        this.state = {
            linkDisplay: false
        }
    }

    _handleLinkView(){
        this.state.linkDisplay = false ? this.setState({linkDisplay: true}) : this.setState({linkDisplay: false})
    }

    render() {
        return <div className="home">
            <h1 className="_title">Yarn</h1>
            <div className="_button-container">
                <img className="_button -build" src={bulb} alt="build link"/>
                <h3 className="_link-label">Build!</h3>
            </div>

            <div className="_nav-menu">
                <NavLink to="/new">
                    <h6 className={this.state.linkDisplay = false ? '_link-off' : '_link-on'}>new</h6>
                </NavLink>
                <NavLink to="/storylist">
                    <h6 className={this.state.linkDisplay = false ? '_link-off' : '_link-on'}>existing</h6>
                  </NavLink>
            </div>

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
