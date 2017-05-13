import React, { Component } from 'react';
import './NewsBlockBig.css';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

//import testimg from '../../../public/assets/img/test-news-image.jpg';

class NewsBlockBig extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, image: null}; 
        this.props.media.then(
                data => this.setState({loading: false, image: data})
            ).catch(
                error => this.setState({loading: false, error: error})
            );       
    }

    render() {
        if(this.state.loading)
            return (<div>loading</div>);
        else
        {
            if(!this.props.newsType)
                return (
                    <div className="news-block-big">
                        <Link to="/">
                            <img src={this.state.image[0].media_details.sizes.medium.source_url} alt='img' className="menu-logo"/>
                            <div className="news-caption">
                                <h1>{this.props.title}</h1>
                            </div>
                        </Link>
                    </div>
                );
            else
                return (
                    <div className="news-block-big">
                        <Link to="/">
                            <img src={this.state.image[0].media_details.sizes.medium.source_url} alt='limg' className="menu-logo"/>
                            <div className="news-type"><Icon type={this.props.newsType} /></div>
                            <div className="line"></div>
                            <div className="news-caption">
                                <h1>{this.props.title}</h1>
                            </div>
                        </Link>
                    </div>
                );
        }
        
        
    }
}

export default NewsBlockBig;