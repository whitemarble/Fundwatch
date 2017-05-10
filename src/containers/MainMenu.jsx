import React, { Component } from 'react';
import { Affix, Menu, Input, Button, Icon } from 'antd';
import './MainMenu.css';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import logo from '../../public/assets/img/logo.png';
import flagCN from '../../public/assets/img/flagCN.png';
import {Link} from 'react-router-dom';
import {MMopen,MMclose} from '../actions/MenuActions'

const Search = Input.Search;

class MainMenu extends Component {
    render() {
        const{mobileOpen,mobileClose} = this.props;
        return (
            <Affix>
                <div className="main-menu-wrap">
                    <div className="container" style={{height:'62px'}}>
                        <Link to="/"><img src={logo} alt='logo' className="menu-logo"/></Link>
                        <Menu className="main-menu" mode="horizontal" >     
                            <Menu.Item key="news">
                                <Link to="/news">NEWS</Link>
                            </Menu.Item>
                            <Menu.Item key="loans">
                                <Link to="/home-loans">HOME LOANS</Link>
                            </Menu.Item>          
                        </Menu>
                        <div className="menu-right">
                            <img src={flagCN} alt='flagCN' style={{height:'20px',float:'left',marginTop:'20px',marginRight:'5px'}}/>
                            <a href="http://www.fundstarnz.com/" style={{marginRight:'20px',fontSize:'1rem'}}>中文</a>
                            <Search
                                placeholder="Enter search text."
                                onSearch={value => console.log(value)}
                            />
                        </div>
                        <Button className={this.props.mobileButtonOn} onClick={mobileOpen}><Icon type="menu-fold" /></Button>
                        <Button className={this.props.mobileButtonOff} onClick={mobileClose}><Icon type="menu-unfold" /></Button>
                        
                    </div>
                </div>
            </Affix>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    mobileButtonOn:state.MenuReducer.MBopen,
    mobileButtonOff:state.MenuReducer.MBclose
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({mobileOpen:MMopen,
                                mobileClose:MMclose}, dispatch);
   
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)