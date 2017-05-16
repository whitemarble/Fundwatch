import React, { Component } from 'react';
import WPimg from './basic/WPimg';

import {WP} from '../../WP';
import './PostContent'

class PostContent extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, error: null, post: null};
        this.props.post.then(
                data => {
                    this.setState({loading: false, post: data})
                    console.log(data);
                }
            ).catch(
                error => this.setState({loading: false, error: error})
            );           
    }

    render() {
        if(this.state.loading)
            return (<div>loading...</div>);
        else if(this.state.post[0].featured_media){
            return (
                <div>
                    <WPimg media={WP.media().id(this.state.post[0].featured_media)} size="full"/>
                    <h1>{this.state.post[0].title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.post[0].content.rendered}}></div>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1>{this.state.post[0].title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.post[0].content.rendered}}></div>
                </div>
            );
        }
        
    }
}

export default PostContent;