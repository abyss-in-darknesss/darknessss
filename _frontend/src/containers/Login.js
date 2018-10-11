import React, { Component } from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import * as auth from 'lib/auth';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) this.handleLogin();
  }

  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    this.props.loginRequest(email, password).then(
      () => {
        if(this.props.status === "SUCCESS") {
          auth.createCookie('key', {
            isLoggedIn: true,
            currentUser: email
          });
          this.props.history.push('/');
        }else {
          this.setState({
            email: '',
            password: '',
          });
        }
      }
    )
  }

  render() {
    return (
      <>
        <Authentication 
          mode={true}
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          handleLogin={this.handleLogin} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.authentication.login.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest: (id, pw) => {
          return dispatch(loginRequest(id,pw));
      }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);