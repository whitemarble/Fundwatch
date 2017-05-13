import React, { Component } from 'react';
import { Row, Col } from 'antd';

import NewsBlockBig from './NewsBlockBig';
import './NewsGrid.css';

import {WP} from '../../WP';

class NewsGrid extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 1" newsType="video-camera" media={WP.media(12)}/>
                </Col>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 2" newsType="video-camera" media={WP.media(12)}/> 
                </Col>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 3" newsType="video-camera" media={WP.media(12)}/>
                </Col>
            </Row>
        );
    }
}

export default NewsGrid;