import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import HomeLoans from './pages/HomeLoans';
import SinglePost from './pages/SinglePost';
import PostCategory from './pages/PostCategory';
import NoMatch from './pages/NoMatch';


class Page extends Component {
    render() {
        return (
            <div className="container" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/home-loans" component={HomeLoans} />
                    <Route path="/article/:slug" component={SinglePost} />
                    <Route path="/category/:slug" component={PostCategory} />
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default Page;