import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Authentication extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (this.props.mode) {
        this.handleLogin();
      } else {
        this.handleRegister();
      }
    }
  }

  handleRegister = () => {
    const email = this.state.email;
    const password = this.state.password;
    const username = this.state.username;
    this.props.onRegister(email, password, username).then(
      (result) => {
        if (!result) {
          this.setState({
            email: '',
            password: '',
            username: ''
          })
        }
      }
    );
  }

  handleLogin = () => {
    const id = this.state.email;
    const pw = this.state.password;

    this.props.onLogin(id, pw).then(
      (success) => {
        if (!success) {
          this.setState({
            email: '',
            password: '',
          });
        }
      }
    );
  }

  render() {
    const loginView = (
      <>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <p>로그인</p>
              <div className="input-field email">
                <label>email</label>
                <input
                  name="email"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                  autoFocus={true}
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="waves-effect waves-light btn"
                onClick={this.handleLogin}>로그인</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="center" >
              계정이 없으신가요? <Link to="/register">회원가입</Link>
            </div>
          </div>
        </div>
      </>
    );

    const registerView = (
      <>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <p>회원가입</p>
              <div className="input-field email">
                <label>email</label>
                <input
                  name="email"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                  autoFocus={true}
                />
              </div>
              <div className="input-field email">
                <label>username</label>
                <input
                  name="username"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="waves-effect waves-light btn"
                onClick={this.handleRegister}>가입</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="center" >
              계정이 있으신가요? <Link to="/login">로그인</Link>
            </div>
          </div>
        </div>
      </>
    );
    return (
      <div className="container auth">
        <Link className="logo" to="/">EF</Link>
        {this.props.mode ? loginView : registerView}
      </div>
    );
  }
}

Authentication.propTypes = {
  mode: PropTypes.bool,
  onRegister: PropTypes.func,
  onLogin: PropTypes.func
};

Authentication.defaultProps = {
  mode: true,
  onRegister: (id, pw, name) => { console.error("register function is not defined") },
  onLogin: (id, pw) => { console.error("login function is not defined") }
};

export default Authentication;
