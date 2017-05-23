import React, { Component } from 'react';
import {Card,Menu} from 'antd';
import {Link} from 'react-router-dom';

import './NewsCatWidget.css'

class NewsCatWidget extends Component {
    render() {
        return (
            <div className="news-cat-widget">
                <Card title="Categories" bodyStyle={{ padding: 0 }}>
                    <Menu mode="vertical">
                        <Menu.Item><Link to="/category/news">NEWS</Link></Menu.Item>
                        <Menu.Item><Link to="/category/video">VIDEO</Link></Menu.Item>
                        <Menu.Item><Link to="/category/sports">SPORTS</Link></Menu.Item>
                        <Menu.Item><Link to="/category/music">MUSIC</Link></Menu.Item>
                    </Menu>
                </Card>

            </div>
        );
    }
}

export default NewsCatWidget;