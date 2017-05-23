import React, { Component } from 'react';
import { Tabs } from 'antd';
import NewsList from './NewsList';
import './NewsTabs.css';
const TabPane = Tabs.TabPane;

import {WP} from '../../WP';

function callback(key) {
  console.log(key);
}

class NewsTabs extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback} style={{marginTop:'20px'}}>
                <TabPane tab="Video" key="1">
                    <NewsList posts={WP.posts().param('categories',4).param('per_page',5).embed()}/>
                </TabPane>
                <TabPane tab="News" key="2">
                    <NewsList posts={WP.posts().param('categories',5).param('per_page',5).embed()}/>
                </TabPane>
                <TabPane tab="Sports" key="3">
                    <NewsList posts={WP.posts().param('categories',6).param('per_page',5).embed()}/>
                </TabPane>
                <TabPane tab="Music" key="4">
                    <NewsList posts={WP.posts().param('categories',7).param('per_page',5).embed()}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default NewsTabs;