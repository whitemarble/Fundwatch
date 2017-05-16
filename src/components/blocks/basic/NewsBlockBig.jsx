import React, { Component } from 'react';
import './NewsBlockBig.css';
import {Link} from 'react-router-dom';
import WPimg from './WPimg';
import PostType from './PostType';

import {WP} from '../../../WP';
import ImgHolder from '../../../../public/assets/img/img.svg';
class NewsBlockBig extends Component {
    constructor(props) {
        super(props);
        let slug = "/"+this.props.slug;
        this.state = {slug:slug};
            
    }
    render() {
        if(this.props.mediaID)
            return (
                <div className="news-block-big">
                    <Link to={this.state.slug}>
                        <WPimg media={WP.media().id(this.props.mediaID)} size={this.props.mediaSize} />
                        <PostType postType={this.props.postType}/>
                        <div className="news-caption">
                            <h1>{this.props.title}</h1>
                        </div>
                    </Link>
                </div>
            );
        else
            return (
                <div className="news-block-big">
                    <Link to={this.state.slug}>
                        <img src={ImgHolder} alt='img'/>
                        <PostType postType={this.props.postType}/>
                        <div className="news-caption">
                            <h1>{this.props.title}</h1>
                        </div>
                    </Link>
                </div>
            );
        
        
    }
}

export default NewsBlockBig;