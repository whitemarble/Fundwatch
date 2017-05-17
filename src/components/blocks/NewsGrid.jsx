import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Spin } from 'antd';

import NewsBlockBig from './basic/NewsBlockBig';
import './NewsGrid.css';

import {WP} from '../../WP';


class NewsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};        
    }

    componentDidMount(){
        this.props.posts.then(
                data => {
                    console.log(data);
                    this.setState({loading: false, posts: data})
                    console.log(this.state.loading);
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
            return (
                <Row gutter={16}>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[0].title.rendered}
                            media={this.state.posts[0].better_featured_image}
                            mediaSize="medium" postType={this.state.posts[0].format}
                            slug={this.state.posts[0].slug}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[1].title.rendered}
                            media={this.state.posts[1].better_featured_image}
                            mediaSize="medium" postType={this.state.posts[1].format}
                            slug={this.state.posts[1].slug}
                        /> 
                    </Col>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[2].title.rendered}
                            media={this.state.posts[2].better_featured_image}
                            mediaSize="medium" postType={this.state.posts[2].format}
                            slug={this.state.posts[2].slug}
                        />
                    </Col>
                </Row>
            );
        }
    }
}

export default NewsGrid;