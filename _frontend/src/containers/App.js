import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatusRequest } from 'actions/authentication'
import { Header } from 'components';

class App extends Component {
  state = {
    isSideNav: true,
  }

  handleNav = () => {
    this.setState({
      isSideNav: !this.state.isSideNav
    })
  }

  componentDidMount() {
    function getCookie(id) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + id + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // get loginData from cookie
    let loginData = getCookie('key');

    // if loginData is undefined, do nothing
    if (typeof loginData === "undefined") return;

    // decode base64 & parse json
    loginData = JSON.parse(atob(loginData));
    // if not logged in, do nothing
    if (!loginData.isLoggedIn) return;

    // page refreshed & has a session in cookie,
    // check whether this cookie is valid or not
    this.props.getStatusRequest().then(
      () => {
        // if session is not valid
        if (!this.props.status.valid) {
          // logout the session
          loginData = {
            isLoggedIn: false,
            email: ''
          };

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          // and notify
          alert('세션이 만료되었습니다. 다시 로그인해주세요.')
        }
      }
    );
  }

  render() {
    // Check whether current route is login or register using regex
    const re = /(login|register)/;
    const isAuth = re.test(this.props.location.pathname);
    return(
      <>
        {isAuth ? undefined : 
          <Header
            handleNav={this.handleNav}
            isSideNav={this.state.isSideNav}
            isLoggedIn={this.props.status.isLoggedIn} />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.authentication.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStatusRequest: () => {
      return dispatch(getStatusRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);