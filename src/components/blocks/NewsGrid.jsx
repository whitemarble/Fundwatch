import React, { Component } from 'react';
import { Row, Col } from 'antd';

import NewsBlockBig from './basic/NewsBlockBig';
import './NewsGrid.css';

import {WP} from '../../WP';


class NewsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};
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
            return (<div>loading</div>);
        else
        {
            return (
                <Row gutter={16}>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[0].title.rendered}
                            mediaID={this.state.posts[0].featured_media}
                            mediaSize="medium" postType={this.state.posts[0].format}
                            slug={this.state.posts[0].slug}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[1].title.rendered}
                            mediaID={this.state.posts[1].featured_media}
                            mediaSize="medium" postType={this.state.posts[1].format}
                            slug={this.state.posts[1].slug}
                        /> 
                    </Col>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title={this.state.posts[2].title.rendered}
                            mediaID={this.state.posts[2].featured_media}
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