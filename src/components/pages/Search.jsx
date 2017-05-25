import React, { Component } from 'react';
import {Row,Col} from 'antd';
import {Helmet} from "react-helmet";
import './News.css';

import NewsListWidget from '../widgets/NewsListWidget';
import NewsCatWidget from '../widgets/NewsCatWidget';
import NewsList from '../blocks/NewsList';

import {WP} from '../../WP';

class Search extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">              
                    <NewsList current="1" pagesize="10" posts={WP.posts().perPage(10).page(1).search(this.props.match.params.keyword).embed()}/>
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsCatWidget />
                    <NewsListWidget title="Recent News" link="/news" posts={WP.posts().perPage(5).embed()}/>
                </Col>
                <Helmet>
                    <title>Search Result | Fundwatch</title>
                    <meta name="description" content="Search Result | Fundwatch" />
                </Helmet>
            </Row>
        );
    }
}

export default Search;