import React, { Component } from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { getStatus, logoutRequest } from 'actions/authentication';
import * as auth from 'lib/auth';

class App extends Component {
  state = {
    isSideNav: true,
  }

  handleNav = () => {
    this.setState({
      isSideNav: !this.state.isSideNav
    })
  }

  handleLogout = () => {
    this.props.logoutRequest().then(
    () => {
      auth.createCookie('key', {
        isLoggedIn: false,
        currentUser: ''
      });
      this.props.history.push('/');
    })
  }

  componentDidMount() {
    // get loginData from cookie
    let loginData = auth.getCookie('key');

    // if loginData is undefined, do nothing
    if(typeof loginData === "undefined") return;

    // decode base64 & parse json
    loginData = JSON.parse(atob(loginData));

    // if not logged in, do nothing
    if(!loginData.isLoggedIn) return;
    
    this.props.getStatus(loginData.currentUser);
  }

  render() {
    // Check whether current route is login or register using regex
    const re = /(login|register)/;
    const isAuth = re.test(this.props.location.pathname);
    return (
      <>
        {isAuth ? undefined :
          <Header
            handleNav={this.handleNav}
            isSideNav={this.state.isSideNav}
            isLoggedIn={this.props.status.isLoggedIn}
            username={this.props.status.currentUser}
            onLogout={this.handleLogout} />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logoutRequest: () => {
          return dispatch(logoutRequest());
      },
      getStatus: (username) => {
        return dispatch(getStatus(username));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);