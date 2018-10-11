import React, { Component } from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { logoutRequest } from 'actions/authentication';

class App extends Component {
  state = {
    isSideNav: true,
  }

  handleNav = () => {
    this.setState({
      isSideNav: !this.state.isSideNav
    })
  }

  render() {
    // Check whether current route is login or register using regex
    const re = /(login|register)/;
    const isAuth = re.test(this.props.location.pathname);
    console.log(this.props.status)
    return (
      <>
        {isAuth ? undefined :
          <Header
            handleNav={this.handleNav}
            isSideNav={this.state.isSideNav}
            isLoggedIn={this.props.status.isLoggedIn}
            username={this.props.status.username} />}
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
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);