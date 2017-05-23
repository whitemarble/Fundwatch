import React, { Component } from 'react';
import { Spin } from 'antd';

import './WPimg.css';

import ImgHolder from '../../../../public/assets/img/img.svg';
class WPimg extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, image: null};    
    }

    componentDidMount(){
        if(this.props.mediaP){
            this.props.mediaP.then(
                data => {
                    this.setState({loading: false, image: data})
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );    
        }
        else if(this.props.media){
            this.setState({loading: false, image: this.props.media})
        }
        else{
            this.setState({loading: false, image: null})
        }
         
    }
    
    render() { 
        if(this.state.loading)
            return (<div className="loading-spin"><Spin size="large" /></div>);
        else if(!this.state.image)
            return (
                    <img src={ImgHolder} alt="img" className='wpimg'/>
                );
        else{
            if(this.props.size === 'thumbnail')
                return (
                    <img src={this.state.image.media_details.sizes.thumbnail.source_url} alt="img" className='wpimg'/>
                );
            if(this.props.size === 'medium')
                return (
                    <img src={this.state.image.media_details.sizes.medium.source_url} alt="img" className='wpimg'/>
                );
            if(this.props.size === 'full')
                return (
                    <img src={this.state.image.source_url} alt="img" className='wpimg'/>
                );
        }
        

        
    }
}

export default WPimg;