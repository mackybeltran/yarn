import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import New from './New.jsx';
import Storylist from './Storylist.jsx';

import './App.scss';

class App extends PureComponent {
    render() {
        return <HashRouter>
            <div className="app">
                <Route exact path="/" component={Home}/>
                <Route path="/storylist" component={Storylist}/>
                <Route path="/new" component={New}/>
            </div>
        </HashRouter>;
    }
}

export default App;
