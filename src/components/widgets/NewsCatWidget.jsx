import React, { Component } from 'react';
import {Card,Icon,Menu} from 'antd';
import {Link} from 'react-router-dom';

import './NewsCatWidget.css'

class NewsCatWidget extends Component {
    render() {
        return (
            <div className="news-cat-widget">
                <Card title="Categories" bodyStyle={{ padding: 0 }}>
                    <Menu mode="inline">
                        <Menu.Item>News Catogory 1</Menu.Item>
                        <Menu.Item>News Catogory 2</Menu.Item>
                        <Menu.Item>News Catogory 3</Menu.Item>
                        <Menu.Item>News Catogory 4</Menu.Item>
                        <Menu.Item>News Catogory 5</Menu.Item>      
                    </Menu>
                </Card>

            </div>
        );
    }
}

export default NewsCatWidget;