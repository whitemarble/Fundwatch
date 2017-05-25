import React, { Component } from 'react';
import './NewsBlockBig.css';
import {Link} from 'react-router-dom';
import WPimg from './WPimg';
import PostType from './PostType';

class NewsBlockBig extends Component {
    
    render() {
            return (
                <div className="news-block-big">
                    <Link to={"/article/"+this.props.slug}>
                        <WPimg media={this.props.media} size={this.props.mediaSize} />
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