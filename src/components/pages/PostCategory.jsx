import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Row,Col,Spin} from 'antd';
import './PostCategory.css';


import NewsListWidget from '../widgets/NewsListWidget';
import NewsCatWidget from '../widgets/NewsCatWidget';
import NewsList from '../blocks/NewsList';
import {WP} from '../../WP';
import NoMatch from './NoMatch';

class CategoryContent extends Component{
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, category: null};  
    }
    componentDidMount(){
        this.props.category.then(
                data => {
                    this.setState({loading: false, category: data})
                    //console.log(data)
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );        
    }
    componentWillReceiveProps(nextProps){
        nextProps.category.then(
                data => {
                    this.setState({loading: false, category: data})
                    //console.log(data)
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );  
    }
    render(){
        console.log(this.props)
        console.log(this.state)
        if(this.state.loading)
            return (<div className="loading-spin"><Spin size="large" /></div>);
        else if(this.state.error)
            return(<NoMatch/>)
        else{
            return (
                <div>
                    <h1 style={{textAlign:"center",textTransform:"uppercase",fontSize:"2rem",color:"#3264ae"}}>{this.state.category[0].name}</h1>
                    
                    <NewsList current="1" pagesize="10" posts={WP.posts().param('categories',this.state.category[0].id).perPage(10).page(1).embed()}/>
                </div>
            );
        }
    }
}

class PostCategory extends Component {
    render() {
        return(
            <Row gutter={24}>
                <Col xs={24} sm={16} lg={18} className="main-content">

                    <CategoryContent category={WP.categories().param('slug',this.props.match.params.slug)}/>
                    
                </Col>

                <Col xs={0} sm={8} lg={6} className="sidebar">
                    <NewsCatWidget current={this.props.match.params.slug}/>
                    <NewsListWidget title="Recent News" link="/news" posts={WP.posts().param('per_page',5).embed()}/>
                </Col>
            </Row>
        );
    }
}

export default PostCategory;