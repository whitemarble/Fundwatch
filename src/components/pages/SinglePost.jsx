import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './SinglePost.css';


import NewsListWidget from '../widgets/NewsListWidget';
import TopNews from '../blocks/TopNews';
import NewsGrid from '../blocks/NewsGrid';
import NewsTabs from '../blocks/NewsTabs';
import PostContent from '../blocks/PostContent';

import {WP} from '../../WP';

class SinglePost extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">
                <PostContent post={WP.posts().param('slug',this.props.match.params.slug).param('_embed',true)} />
                    
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsListWidget />
                    <NewsListWidget />
                    <NewsListWidget />
                </Col>
            </Row>
        );
    }
}

export default SinglePost;