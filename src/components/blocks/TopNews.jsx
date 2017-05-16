import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';

import NewsBlockBig from './basic/NewsBlockBig';

import './TopNews.css';



class TopNews extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};
        this.props.posts.then(
                data => {
                    this.setState({loading: false, posts: data})
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
                                     mediaID={this.state.posts[0].featured_media}
                                     mediaSize="full" postType={this.state.posts[0].format}
                                     slug={this.state.posts[0].slug}
                                    />
                                </div>
                                <div>
                                    <NewsBlockBig title={this.state.posts[1].title.rendered}
                                     mediaID={this.state.posts[1].featured_media}
                                     mediaSize="full" postType={this.state.posts[1].format}
                                     slug={this.state.posts[1].slug}
                                    />
                                </div>
                                <div>
                                    <NewsBlockBig title={this.state.posts[2].title.rendered}
                                     mediaID={this.state.posts[2].featured_media}
                                     mediaSize="full" postType={this.state.posts[2].format}
                                     slug={this.state.posts[2].slug}
                                    />
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={24} md={8}>
                            <NewsBlockBig title={this.state.posts[3].title.rendered}
                             mediaID={this.state.posts[3].featured_media}
                             mediaSize="medium" postType={this.state.posts[3].format}
                             slug={this.state.posts[0].slug}
                            />
                            <NewsBlockBig title={this.state.posts[4].title.rendered}
                             mediaID={this.state.posts[4].featured_media}
                             mediaSize="medium" postType={this.state.posts[4].format}
                             slug={this.state.posts[0].slug}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default TopNews;