import React, { Component } from 'react';
import {Row,Col} from 'antd';
import './News.css';

import NewsListWidget from '../widgets/NewsListWidget';
import NewsCatWidget from '../widgets/NewsCatWidget';
import NewsList from '../blocks/NewsList';

import {WP} from '../../WP';

class News extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">
                    <NewsList posts={WP.posts().param('per_page',10).embed()}/>
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsCatWidget />
                    <NewsListWidget />
                    <NewsListWidget />
                </Col>
            </Row>
        );
    }
}

export default News;