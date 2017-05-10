import React, { Component } from 'react';
import { Button } from 'antd';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {buttonClicked} from '../actions/MyButtonAction'

class MyButton extends Component {
    
    render() {
        const{buttonClick} = this.props;
        return (
            <div>
                <Button type="primary" onClick={buttonClick} >Button</Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({buttonClick:buttonClicked}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyButton)