import React, { Component } from 'react';
import { Row, Col } from 'antd';

import NewsBlockBig from './NewsBlockBig';
import './NewsGrid.css';

class NewsGrid extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 1" newsType="video-camera"/>
                </Col>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 2" newsType="video-camera"/> 
                </Col>
                <Col xs={24} md={8}>
                    <NewsBlockBig title="title 3" newsType="video-camera"/>
                </Col>
            </Row>
        );
    }
}

export default NewsGrid;