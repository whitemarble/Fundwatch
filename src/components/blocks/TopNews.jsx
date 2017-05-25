import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import { Spin } from 'antd';

import NewsBlockBig from './basic/NewsBlockBig';

import './TopNews.css';



class TopNews extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};   
    }
    componentDidMount(){
        this.props.posts.then(
                data => {
                    this.setState({loading: false, posts: data})
                    //console.log(data)
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
                    //console.log(post._embedded["wp:featuredmedia"]);
                    if(post._embedded["wp:featuredmedia"] !== undefined){
                        return(
                        <div key={post.id}>
                            <NewsBlockBig title={post.title.rendered}
                                media={post._embedded["wp:featuredmedia"][0]}
                                mediaSize="medium" postType={post.format}
                                slug={post.slug}
                            />
                        </div>)
                    }else{
                        return(
                        <div key={post.id}>
                            <NewsBlockBig title={post.title.rendered}
                                mediaSize="medium" postType={post.format}
                                slug={post.slug}
                            />
                        </div>)
                    }
                    
                }
            );
            return (
                <div>
                    <Row gutter={16} className="top-news">
                        <Col xs={24} md={16} style={{marginBottom:'10px'}}>
                            <Carousel autoplay>
                                {posts[0]}
                                {posts[1]}
                                {posts[2]}
                            </Carousel>
                        </Col>
                        <Col xs={24} md={8}>
                            {posts[3]}
                            {posts[4]}
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default TopNews;