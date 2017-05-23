import React, { Component } from 'react';
import WPimg from './basic/WPimg';
import { Breadcrumb, Icon, Tag, Spin } from 'antd';
import {Link} from 'react-router-dom';

import NoMatch from '../pages/NoMatch';

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
                    console.log(data)
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );     
    }

    render() {
        if(this.state.loading)
            return (<div className="loading-spin"><Spin size="large" /></div>);
        else if(this.state.error)
            return(<NoMatch/>)
        else{
            const postImg = null;
            if(this.state.post[0]._embedded["wp:featuredmedia"] != undefined)
                postImg = this.state.post[0]._embedded["wp:featuredmedia"][0]
            return (
                <div>
                    <h1 className="post-title">{this.state.post[0].title.rendered}</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/news">News</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.post[0].title.rendered}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="post-meta">
                        <Icon type="clock-circle-o" /> {this.state.post[0].date} | <Icon type="user" /> by: {this.state.post[0]._embedded["author"][0].name}
                        <Link to={"/category/"+this.state.post[0]._embedded["wp:term"][0][0].slug} className="category"><Tag color="#3264ae">{this.state.post[0]._embedded["wp:term"][0][0].name}</Tag></Link>
                    </div>
                    <div className="post-image">
                        <WPimg media={postImg} size="full"/>
                    </div>
                    <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.post[0].content.rendered}}></div>
                </div>
            );
        }
        
    }
}

export default PostContent;