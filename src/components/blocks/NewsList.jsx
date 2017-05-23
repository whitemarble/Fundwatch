import React, { Component } from 'react';
import {Button, Spin} from 'antd';
import './NewsList.css';
import NewsListItem from './basic/NewsListItem';

class NewsList extends Component {
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
        else
        {
            const newsItems = this.state.posts.map(
                (post) =>{
                    console.log(post._embedded["wp:featuredmedia"]);
                    if(post._embedded["wp:featuredmedia"] != undefined){
                        return(
                        <NewsListItem key={post.id} title={post.title.rendered} media={post._embedded["wp:featuredmedia"][0]} excerpt={post.excerpt.rendered}
                        mediaSize="medium" postType={post.format} slug={post.slug} author={post._embedded["author"][0].name} date={post.date}
                        />)
                    }else{
                        return(
                        <NewsListItem key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered}
                        mediaSize="medium" postType={post.format} slug={post.slug} author={post._embedded["author"][0].name} date={post.date}
                        />)
                    }
                    
                }
            );

            return (
                <ul className="news-list">
                    {newsItems}

                    <li style={{textAlign:'center',margin:'15px'}}>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} size="large">
                        LOAD MORE...
                    </Button>   
                    </li>
                </ul>
                
            );
        }

        
    }
}

export default NewsList;