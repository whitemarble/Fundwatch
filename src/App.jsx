import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router,browserHistory} from 'react-router-dom';

import { Layout } from 'antd';

import './App.css';
import Page from './components/Page';
import FooterContent from './components/FooterContent';
import MainMenu from './containers/MainMenu';
import MobileMenu from './containers/MobileMenu';


const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Layout className="App">
          <Header>
             <MainMenu /> 
             <MobileMenu /> 
          </Header>
          <Content> 
            <Page /> 
          </Content>
          <Footer style={{marginTop:"30px"}}>
            <FooterContent />
          </Footer>
        </Layout>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps
)(App)