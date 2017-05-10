import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';

import './NewsListItem.css';

import testimg from '../../../public/assets/img/test-news-image.jpg';

class NewsListItem extends Component {
    render() {
        return (
            <li className="news-list-item">
                <Row gutter={16}>
                    <Col sm={24} md={8}>
                        <div className="news-img">
                            <img src={testimg} alt='pic'/>
                        </div>
                    </Col>
                    <Col sm={24} md={16}>
                        <h1>TRANSPORT INDEX WARNS OF TOUGHER TIMES</h1>
                        <div className="news-meta">
                            <Icon type="clock-circle-o" /> 10/May/2017 | <Icon type="user" /> admin
                            <div className="news-share"><Icon type="share-alt" /> <Icon type="android-o" /> <Icon type="apple-o" /> <Icon type="windows-o" /></div>
                        </div>
                        <p>The reason is because goods and raw materials are moved some three to six months ahead of sales, 
                            and are booked onto trains and ships for transport. Lower transport profits means less goods are 
                            moving and that means the economy could be turning down</p>
                    </Col>
                </Row>
            </li>
        );
    }
}

export default NewsListItem;