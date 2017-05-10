import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import HomeLoans from './pages/HomeLoans';

class Page extends Component {
    render() {
        return (
            <div className="container" >
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/home-loans" component={HomeLoans}/>
            </div>
        );
    }
}

export default Page;