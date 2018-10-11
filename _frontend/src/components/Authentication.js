import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Authentication = ({
  mode,
  email,
  password,
  username,
  handleChange,
  handleKeyPress,
  handleLogin,
  handleRegister
}) => (
  <div className="container auth">
    <Link className="logo" to="/">EF</Link>
    {mode ?
    // Login View
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
                  onChange={handleChange}
                  value={email}
                  autoFocus={true}
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={handleChange}
                  value={password}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="waves-effect waves-light btn"
                onClick={handleLogin}>로그인</div>
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
      </> :

      // Logout View
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
                  onChange={handleChange}
                  value={email}
                  autoFocus={true}
                />
              </div>
              <div className="input-field email">
                <label>username</label>
                <input
                  name="username"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                  value={username}
                />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={handleChange}
                  value={password}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="waves-effect waves-light btn"
                onClick={handleRegister}>가입</div>
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
      </>}
  </div>
);


Authentication.propTypes = {
  mode: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  username: PropTypes.string,
  handleChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func
};

Authentication.defaultProps = {
  mode: true,
  email: '',
  password: '',
  username: '',
  handleChange: (e) => { console.log('change function is not defined')},
  handleKeyPress: (e) => { console.log('key-press function is not defined')},
  handleLogin: (id, pw) => { console.error("login function is not defined") },
  handleRegister: (id, pw, name) => { console.error("register function is not defined") },
};

export default Authentication;
