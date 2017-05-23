import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Spin } from 'antd';

import NewsBlockBig from './basic/NewsBlockBig';
import './NewsGrid.css';

import {WP} from '../../WP';



class NewsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null,media:null};        
    }

    componentDidMount(){
        this.props.posts.then(
                data => {
                    console.log(data);
                    this.setState({loading: false, posts: data});
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );   
    }

    
    render() {
        if(this.state.loading)
            return (<div className="loading-spin"><Spin size="large" /></div>);
        else
        {
            const posts = this.state.posts.map(
                (post) =>{
                    console.log(post._embedded["wp:featuredmedia"]);
                    if(post._embedded["wp:featuredmedia"] != undefined){
                        return(
                        <Col xs={24} md={8} key={post.id}>
                            <NewsBlockBig title={post.title.rendered}
                                media={post._embedded["wp:featuredmedia"][0]}
                                mediaSize="medium" postType={post.format}
                                slug={post.slug}
                            />
                        </Col>)
                    }else{
                        return(
                        <Col xs={24} md={8} key={post.id}>
                            <NewsBlockBig title={post.title.rendered}
                                mediaSize="medium" postType={post.format}
                                slug={post.slug}
                            />
                        </Col>)
                    }
                    
                }
            );
            return (
                <Row gutter={16}>
                    {posts}
                </Row>
            );
        }
    }
}

export default NewsGrid;