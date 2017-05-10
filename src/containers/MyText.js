import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyText extends Component {
    render() {
        return (
            <div>
               {this.props.myText} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    myText: state.MyButtonReducer.text
  }
}

export default connect(
  mapStateToProps
)(MyText)