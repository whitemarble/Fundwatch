import React, { Component } from 'react';
import {Button} from 'antd';
import './NewsList.css';
import NewsListItem from './basic/NewsListItem';

class NewsBlockHorizon extends Component {
    state = {
        loading: false,
        iconLoading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    render() {  
        return (
            <ul className="news-list">
                <NewsListItem />    
                <NewsListItem /> 
                <NewsListItem /> 
                <NewsListItem /> 
                <NewsListItem />

                <li style={{textAlign:'center',margin:'15px'}}>
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} size="large">
                    LOAD MORE...
                </Button>   
                </li>
            </ul>
            
        );
    }
}

export default NewsBlockHorizon;