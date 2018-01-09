import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';
import HelloWorld1 from '../components/HelloWorld1';
import Counter from '../pages/Counter/Counter';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">counter</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={HelloWorld}/>
                <Route path="/page1" component={HelloWorld1}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;