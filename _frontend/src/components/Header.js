import React from 'react';
import { Link } from 'react-router-dom';
import  PropTypes from 'prop-types';

/*
  로그인 시, 로그인 버튼 상단에 2줄 
  <li><a class="waves-effect waves-light btn-flat" href="<?php echo _URL?>member/mypage"><?php echo $_SESSION['member']->name ?></a></li>
  <li><a class="waves-effect waves-light btn" href="<?php echo _URL?>member/logout">로그아웃</a></li>
*/

const loginBtn = (
  <li><Link to="login" className="waves-effect waves-light btn">로그인</Link></li>
)

const logoutBtn = (
  <li><Link to="#" className="waves-effect waves-light btn">로그아웃</Link></li>
)

const Header = ({ handleNav, isSideNav, isLoggedIn, username }) => (
  <header style={{width:`${isSideNav ? '250px' : '0'}`}}>
    <nav id="gnb">
      <div id="logo">
        <i className="material-icons"
        style={!isSideNav ? {transform: 'rotate(-90deg)'}:{}}
          onClick={handleNav}>menu</i>
        <Link to="/">EF</Link>
      </div>
      <ul id="gnb-button-group">
        {isLoggedIn ? logoutBtn : loginBtn}
      </ul>
    </nav>
    <ul className="sidenav" style={{display:`${isSideNav ? 'block' : 'none'}`}}>
      <li id="nav-userinfo">
        <div id="nav-profile">
          <div className="user-img-0">
            <img className="circle user-img-0" alt="user-profile" src="https://www.worldcrunch.com/assets/img/avatars/thumbnails/default-user-img-profile.jpg"/>
          </div>
          <span id="nav-username">{username}</span>
        </div>
      </li>
      <ul>
          <li><Link to="#"><i className="material-icons">edit</i>글쓰기</Link></li>
          <li><Link to="#"><i className="material-icons">settings</i>설정</Link></li>
        </ul>
      <div className="divider"></div>
      <li>

      </li>
    </ul>
  </header>
);

Header.propTypes = {
  handleNav: PropTypes.func,
  isSideNav: PropTypes.bool,
  isLoggedIn: PropTypes.bool
};

Header.defaultProps = {
  handleNav: () => (console.log('handleNav function is not defined')),
  isSideNav: true,
  isLoggedIn: false
};

export default Header;