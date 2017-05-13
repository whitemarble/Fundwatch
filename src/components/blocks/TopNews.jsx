import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';

import NewsBlockBig from './NewsBlockBig';

import './TopNews.css';
import {WP} from '../../WP';
WP.posts().then(data=>
 console.log(data)
).catch((err)=>{
console.log(err)
})
WP.media(12).then((data)=>{
 //console.log(data);
 //console.log(data[0].media_details.sizes.medium.source_url)
}).catch((err)=>{
console.log(err)
})

console.log(WP.media(12))
class TopNews extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};
        this.props.posts.then(
                data => {
                    console.log(data);
                    this.setState({loading: false, posts: data})
                    console.log(this.state.loading);
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );           
    }

    render() {
        if(this.state.loading)
            return (<div>loading</div>);
        else
        {
            return (
                <div>
                    <Row gutter={16} className="top-news">
                        <Col xs={24} md={16} style={{marginBottom:'10px'}}>
                            <Carousel autoplay>
                                <div>
                                    <NewsBlockBig title={this.state.posts[0].title.rendered}
                                     media={WP.media(12)}
                                    />
                                </div>
                                <div>
                                    <NewsBlockBig title={this.state.posts[0].title.rendered}
                                     media={WP.media(12)}
                                    />
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={24} md={8}>
                            <NewsBlockBig title={this.state.posts[0].title.rendered}
                             media={WP.media(12)}
                            />
                            <NewsBlockBig title={this.state.posts[0].title.rendered}
                             media={WP.media(12)}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default TopNews;