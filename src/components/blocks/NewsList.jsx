import React, { Component } from 'react';
import {Spin, Pagination} from 'antd';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import './NewsList.css';
import NewsListItem from './basic/NewsListItem';

import {WP} from '../../WP'

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, posts: null, current: 1, pagesize:2};   
    }
    componentDidMount(){
        this.setState({current: Number(this.props.current), pagesize: Number(this.props.pagesize)})
        this.props.posts.then(
            data => {
                this.setState({loading: false, posts: data, total:Number(data._paging.total)})
                //console.log("DidMount:")
                //console.log(data)
                //console.log(data._paging)
            }
        ).catch(
            error => this.setState({loading: false, error: error})
        );        
    }
    componentWillReceiveProps(nextProps){
        //console.log("next props:")
        //console.log(nextProps)
         this.setState({loading:true})
        nextProps.posts.then(
            data => {
                this.setState({loading: false, posts: data})
                //console.log("WillReceiveProps:")
                //console.log(data)
            }
        ).catch(
            error => this.setState({loading: false, error: error})
        );        
    }

    pageChange = (page, pageSize)=>{
        this.setState({loading:true,current:page})
        WP.posts().param('categories',this.props.category).perPage(this.state.pagesize).page(page).embed().then(
            data => {
                this.setState({loading: false, posts: data, total:Number(data._paging.total)})
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
                    if(post._embedded["wp:featuredmedia"] !== undefined){
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
                        <Pagination onChange={this.pageChange} defaultCurrent={1} current={this.state.current} defaultPageSize={this.state.pagesize} total={this.state.total} />
                    </li>
                </ul>
                
            );
        }

        
    }
}

export default NewsList;
/*
const mapStateToProps = (state) => {
  return {
      current:state.PageReducer.current,
      pagesize:state.PageReducer.pagesize
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({pageChange:pageChanged}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList)*/