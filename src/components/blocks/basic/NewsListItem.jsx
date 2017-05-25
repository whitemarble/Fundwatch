import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';
import {Link} from 'react-router-dom';

import WPimg from './WPimg';

import './NewsListItem.css';


class NewsListItem extends Component {
    constructor(props) {
        super(props);
        const mydate = new Date(this.props.date)
        this.state = {date:mydate.toLocaleDateString()+" "+mydate.toLocaleTimeString() };   
    }
    render() {
        return (
            <li className="news-list-item">
                <Row gutter={16}>
                    <Col sm={24} md={8}>
                        <div className="news-img">
                            <Link to={"/article/"+this.props.slug}>
                                <WPimg media={this.props.media} size={this.props.mediaSize} />
                            </Link>
                        </div>
                    </Col>
                    <Col sm={24} md={16}>
                        <h1><Link to={"/article/"+this.props.slug}>{this.props.title}</Link></h1>
                        <div className="news-meta">
                            <Icon type="clock-circle-o" /> {this.state.date} | <Icon type="user" /> {this.props.author}
                            <div className="news-share"><Icon type="share-alt" /> <Icon type="android-o" /> <Icon type="apple-o" /> <Icon type="windows-o" /></div>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: this.props.excerpt}}></p>
                    </Col>
                </Row>
            </li>
        );
    }
}

export default NewsListItem;