import React, { Component } from 'react';
import { Tabs } from 'antd';
import NewsList from './NewsList';
import './NewsTabs.css';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class NewsTabs extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback} style={{marginTop:'20px'}}>
                <TabPane tab="Category 1" key="1">
                    <NewsList />
                </TabPane>
                <TabPane tab="Category 2" key="2">
                    <NewsList />
                </TabPane>
                <TabPane tab="Category 3" key="3">
                    <NewsList />
                </TabPane>
                <TabPane tab="Category 4" key="4">
                    <NewsList />
                </TabPane>
            </Tabs>
        );
    }
}

export default NewsTabs;