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
                    <NewsList current="1" pagesize="6" category="4" posts={WP.posts().param('categories',4).perPage(6).page(1).embed()}/>
                </TabPane>
                <TabPane tab="News" key="2">
                    <NewsList current="1" pagesize="6" category="5" posts={WP.posts().param('categories',5).perPage(6).page(1).embed()}/>
                </TabPane>
                <TabPane tab="Sports" key="3">
                    <NewsList current="1" pagesize="6" category="6" posts={WP.posts().param('categories',6).perPage(6).page(1).embed()}/>
                </TabPane>
                <TabPane tab="Music" key="4">
                    <NewsList current="1" pagesize="6" category="7" posts={WP.posts().param('categories',7).perPage(6).page(1).embed()}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default NewsTabs;