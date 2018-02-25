import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form';

import * as LoginActions from '../../actions/LoginActions';

class LoginComponent extends Component {
    constructor(){
      super();

      this.state ={
        userName:'',
        password:''
      }

    }
    
    componentWillMount(){
      console.log(this.props.isLoggedIn)
    }

    handleChange = (event)=>{
      let userInfo = {};
      userInfo[event.target.id] = event.target.value;
      this.setState(userInfo);
    }

    handleSubmit = (e)=>{
      console.log("Inside submit", e);
    }
    componentDidMount(){

    }
  render() {
    return (
          <div className="login-body-align">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 cs-login-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group col-xs-12">
                    <label className="cs-label" htmlFor="userName">User Name</label>
                    <input id="userName" value={this.state.userName} onChange={this.handleChange} className="form-control" type="text" autoComplete="off"/>
                </div>
                <div className="input-group col-xs-12 cs-input-field">
                    <label className="cs-label" htmlFor="password">Password</label>
                    <input id="password" value={this.state.password} onChange={this.handleChange} className="form-control" type="password" autoComplete="off"/>
                </div>
                <div className="row col-xs-6 cs-input-field">
                    <button type="submit" className="btn btn-primary cs-full-width">LOG IN</button>
                </div>
              </form>

            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      ...state.login
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
          LoginActions.login()
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
