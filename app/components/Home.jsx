import React, { PureComponent } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import './Home.scss';
import bulb from './public/bulb.png';
import controller from './public/controller.png';

class Home extends PureComponent {

     // <NavLink to="/storylist">Stories</NavLink>
    render(){

        return (
            <div className='home'>
                <h1 className='_title'>Yarn</h1>
                <div className='_hand-pointer'>
                    <img className='_btn-build' src={bulb} alt="build link"/>
                    <h3 className='_link'>Build!</h3>
                </div>
                <NavLink to='/new'>
                    <h6 className='_link'>new</h6>
                </NavLink>
                <NavLink to='/storylist'>
                    <h6 className='_link'>existing</h6>
                </NavLink>
                <NavLink to='/storylist'>
                    <img className='_btn-play'src={controller} alt="play link"/>
                    <h3>Play!</h3>
                </NavLink>
            </div>
            )
    }
}

export default Home;
