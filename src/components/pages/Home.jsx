import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Home.css';
import {Helmet} from "react-helmet";


import TopNews from '../blocks/TopNews';
import NewsGrid from '../blocks/NewsGrid';
import NewsTabs from '../blocks/NewsTabs';

import {WP} from '../../WP';

class Home extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">
                    <TopNews posts={WP.posts().param('categories',5).param('per_page',5).embed()}/>
                    <NewsGrid posts={WP.posts().param('categories',4).param('per_page',3).embed()}/>
                    <NewsTabs />
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <h1>Sidebar</h1>
                </Col>

                <Helmet>
                    <title>Fundwatch</title>
                    <meta name="description" content="Fundwatch Website Description" />
                </Helmet>
            </Row>
        );
    }
}

export default Home;