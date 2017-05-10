import React, { Component } from 'react';
import './NewsBlockBig.css';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

import testimg from '../../../public/assets/img/test-news-image.jpg';

class NewsBlockBig extends Component {
    render() {
        if(!this.props.newsType)
            return (
                <div className="news-block-big">
                    <Link to="/">
                        <img src={testimg} alt='logo' className="menu-logo"/>
                        <div className="news-caption">
                            <h1>{this.props.title}</h1>
                        </div>
                    </Link>
                </div>
            );
        else
            return (
                <div className="news-block-big">
                    <Link to="/">
                        <img src={testimg} alt='logo' className="menu-logo"/>
                        <div className="news-type"><Icon type={this.props.newsType} /></div>
                        <div className="line"></div>
                        <div className="news-caption">
                            <h1>{this.props.title}</h1>
                        </div>
                    </Link>
                </div>
            );
    }
}

export default NewsBlockBig;