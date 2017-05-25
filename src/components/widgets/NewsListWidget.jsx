import React, { Component } from 'react';
import {Card,Icon,Spin} from 'antd';
import {Link} from 'react-router-dom';
import WPimg from '../blocks/basic/WPimg';

import './NewsListWidget.css';
import testimg from '../../../public/assets/img/test-news-image.jpg';

class NewsListWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null};  
    }
    componentDidMount(){
        this.props.posts.then(
                data => {
                    this.setState({loading: false, posts: data})
                    console.log(data)
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );        
    }
    render() {
        if(this.state.loading)
            return (<div className="loading-spin"><Spin size="large" /></div>);
        else if(this.state.error)
            return(<div>error</div>)
        else{
            const firstimg = ()=>{
                if(this.state.posts[0]._embedded["wp:featuredmedia"] !== undefined)
                    return <WPimg media={this.state.posts[0]._embedded["wp:featuredmedia"][0]} size="medium" />
                else
                    return <img alt="img" width="100%" src={testimg} />
            }
            const newsItems = this.state.posts.map(
                (post) =>{
                    return <li key={post.id}><Icon type="caret-right" /><Link to={"/article/"+post.slug}>{post.title.rendered}</Link></li>
                    
                }
            );
            return (
                <div className="news-list-widget">
                    <Card title={this.props.title} extra={<Link to={this.props.link}>More</Link>} bodyStyle={{ padding: 0 }}>
                        {firstimg()}
                        <ul>
                            {newsItems}
                        </ul>
                    </Card>
                </div>
            );
        }
        
        
    }
}

export default NewsListWidget;