import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';

import NewsBlockBig from './NewsBlockBig';

import './TopNews.css';

class TopNews extends Component {
    render() {
        return (
            <div>
                <Row gutter={16} className="top-news">
                    <Col xs={24} md={16} style={{marginBottom:'10px'}}>
                        <Carousel autoplay>
                            <div>
                                <NewsBlockBig title="this is title1"/>
                            </div>
                            <div>
                                <NewsBlockBig title="this is title2"/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col xs={24} md={8}>
                        <NewsBlockBig title="this is title3"/>
                        <NewsBlockBig title="this is title4"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopNews;