import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import HomeLoans from './pages/HomeLoans';
import SinglePost from './pages/SinglePost';

class Page extends Component {
    render() {
        return (
            <div className="container" >
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/home-loans" component={HomeLoans}/>
                <Route exact path="/:slug" component={SinglePost}/>
            </div>
        );
    }
}

export default Page;