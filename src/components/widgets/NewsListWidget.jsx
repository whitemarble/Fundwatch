import React, { Component } from 'react';
import {Card,Icon} from 'antd';
import {Link} from 'react-router-dom';

import './NewsListWidget.css';
import testimg from '../../../public/assets/img/test-news-image.jpg';

class NewsListWidget extends Component {
    render() {
        return (
            <div className="news-list-widget">
                <Card title="News Category 1" extra={<Link to="/">More</Link>} bodyStyle={{ padding: 0 }}>
                    <img alt="example" width="100%" src={testimg} />
                    <ul>
                        <li><Icon type="caret-right" /><Link to="/">Facebook removes accounts in fight against fake news</Link></li>
                        <li><Icon type="caret-right" /><Link to="/">Facebook removes accounts in fight against fake news</Link></li>
                        <li><Icon type="caret-right" /><Link to="/">Facebook removes accounts in fight against fake news</Link></li>
                        <li><Icon type="caret-right" /><Link to="/">Facebook removes accounts in fight against fake news</Link></li>
                        <li><Icon type="caret-right" /><Link to="/">Facebook removes accounts in fight against fake news</Link></li>
                    </ul>
                </Card>

            </div>
        );
    }
}

export default NewsListWidget;