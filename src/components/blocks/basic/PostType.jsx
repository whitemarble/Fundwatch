import React, { Component } from 'react';
import {Icon} from 'antd';


import './PostType.css';

class PostImg extends Component {
    constructor(props) {
        super(props);
        switch(this.props.postType){
            case 'video':
            this.state = {icon: "video-camera"};
            break;
            case 'audio':
            this.state = {icon: "sound"};
            break;
            default: 
            this.state = {icon: "video-camera"};
            break;
        }  
    }
    render() {
        if(this.props.postType === "standard")
            return (<div></div>);
        else
            return (
                <div className="news-type">
                    <div className="news-type-icon"><Icon type={this.state.icon} /></div>
                    <div className="line"></div>
                </div>
            );
    }
}

export default PostImg;