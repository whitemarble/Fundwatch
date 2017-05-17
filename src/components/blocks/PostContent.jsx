import React, { Component } from 'react';
import WPimg from './basic/WPimg';
import { Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';

import {WP} from '../../WP';
import './PostContent.css'

class PostContent extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, post: null};
              
    }

    componentDidMount(){
        this.props.post.then(
                data => {
                    this.setState({loading: false, post: data})
                    console.log(data);
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );     
    }

    render() {
        if(this.state.loading)
            return (<div>loading...</div>);
        else if(this.state.post[0].featured_media){
            return (
                <div>
                    <h1 className="post-title">{this.state.post[0].title.rendered}</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/news">News</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.post[0].title.rendered}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="post-meta">
                        <Icon type="clock-circle-o" /> {this.state.post[0].date} | <Icon type="user" />by: {this.state.post[0].author}
                    </div>
                    <div className="post-image">
                        <WPimg media={this.state.post[0].better_featured_image} size="full"/>
                    </div>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.post[0].content.rendered}}></div>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1>{this.state.post[0].title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.post[0].content.rendered}}></div>
                </div>
            );
        }
        
    }
}

export default PostContent;