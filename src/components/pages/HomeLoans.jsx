import React, { Component } from 'react';
import {Row,Col,Spin} from 'antd';
import {Helmet} from "react-helmet";
import './HomeLoans.css';

import NewsListWidget from '../widgets/NewsListWidget';
import NewsCatWidget from '../widgets/NewsCatWidget';
import {WP} from '../../WP';

class HomeLoans extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">

                    
                    
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsCatWidget current={this.props.match.params.slug}/>
                    <NewsListWidget title="Recent News" link="/news" posts={WP.posts().param('per_page',5).embed()}/>
                </Col>
            </Row>
        );
    }
}

export default HomeLoans;