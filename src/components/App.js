import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import HeaderComponent from './common/HeaderComponent';
import FooterComponent from './common/FooterComponent';
import { showMessage } from '../actions/AppActions';
import {HomeRoutes} from '../routes/routes';
import '../styles/App.css'

class App extends Component {

  componentWillMount(){
  }
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="page-content-block">
          <div className="container">
            <HomeRoutes />
          </div>
        </div>
        <FooterComponent />
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
