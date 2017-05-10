import React, { Component } from 'react';
import { Menu,Input } from 'antd';
import {Link} from 'react-router-dom';
import flagCN from '../../public/assets/img/flagCN.png';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {MMclicked} from '../actions/MenuActions';


import './MobileMenu.css';

const Search = Input.Search;

class MobileMenu extends Component {
    render() {
        const{mmclicked} = this.props;
        return (
            <div className={this.props.MobileMenuClass}>
                <Menu mode="inline" >
                    <Menu.Item key="news" >
                        <Link to="/news" onClick={mmclicked} >NEWS</Link>
                    </Menu.Item>
                    <Menu.Item key="loans">
                        <Link to="/home-loans" onClick={mmclicked} >HOME LOANS</Link>
                    </Menu.Item>   
                    <Menu.Item key="cn">
                        <a href="http://www.fundstarnz.com/" onClick={mmclicked}><img src={flagCN} alt='flagCN' style={{height:'20px',float:'left',marginTop:'11px',marginRight:'5px'}}/>中文</a>
                    </Menu.Item>    
                </Menu>
                <Search
                    placeholder="Enter search text."
                    onSearch={mmclicked}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    MobileMenuClass: state.MenuReducer.MobileMenuClass
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({mmclicked:MMclicked}, dispatch);
   
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu)