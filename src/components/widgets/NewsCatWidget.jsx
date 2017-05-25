import React, { Component } from 'react';
import {Card,Menu} from 'antd';
import {Link} from 'react-router-dom';

import './NewsCatWidget.css'

class NewsCatWidget extends Component {
    
    render() {
        return (
            <div className="news-cat-widget">
                <Card title="Categories" bodyStyle={{ padding: 0 }}>
                    <Menu mode="inline" selectedKeys={[this.props.current]}>
                        <Menu.Item key='news'><Link name="news" to="/category/news">NEWS</Link></Menu.Item>
                        <Menu.Item key='video'><Link name="video" to="/category/video">VIDEO</Link></Menu.Item>
                        <Menu.Item key='sports'><Link to="/category/sports">SPORTS</Link></Menu.Item>
                        <Menu.Item key='music'><Link to="/category/music">MUSIC</Link></Menu.Item>
                    </Menu>
                </Card>

            </div>
        );
    }
}

export default NewsCatWidget;