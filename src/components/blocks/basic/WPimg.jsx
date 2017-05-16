import React, { Component } from 'react';
import './WPimg.css';

import ImgHolder from '../../../../public/assets/img/img.svg';
class WPimg extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, image: null};
        this.props.media.then(
                data => {
                    this.setState({loading: false, image: data})
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );      
    }
    
    render() { 
        if(this.state.loading)
            return (<div>loading...</div>);
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
            if(this.props.size === 'large')
                return (
                    <img src={this.state.image.media_details.sizes.medium_large.source_url} alt="img" className='wpimg'/>
                );
            if(this.props.size === 'full')
                return (
                    <img src={this.state.image.media_details.sizes.full.source_url} alt="img" className='wpimg'/>
                );
        }
        

        
    }
}

export default WPimg;