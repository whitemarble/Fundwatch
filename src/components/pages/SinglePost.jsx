import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './SinglePost.css';

import NewsCatWidget from '../widgets/NewsCatWidget';
import NewsListWidget from '../widgets/NewsListWidget';
import PostContent from '../blocks/PostContent';

import {WP} from '../../WP';

class SinglePost extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">
                <PostContent post={WP.posts().slug(this.props.match.params.slug).embed()} />
                    
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsCatWidget />
                    <NewsListWidget title="Recent News" link="/news" posts={WP.posts().param('per_page',5).embed()}/>
                </Col>
            </Row>
        );
    }
}

export default SinglePost;