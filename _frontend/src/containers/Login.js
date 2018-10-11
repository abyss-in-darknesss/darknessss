import React, { Component } from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';

class Login extends Component {

  handleLogin = (id, pw) => {
    return this.props.loginRequest(id, pw).then(
      () => {
        if(this.props.status === "SUCCESS") {
          // create session data
          const loginData = {
            isLoggedIn: true,
            currentUser: id
          }

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          alert('로그인이 완료되었습니다')
          this.props.history.push('/');
          return true;
        }else {
          alert('아이디 또는 비밀번호가 올바르지 않습니다.')
          return false;
        }
      }
    )
  }

  render() {
    return (
      <>
        <Authentication mode={true}
          onLogin={this.handleLogin}/>
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