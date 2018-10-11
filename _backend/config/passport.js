const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import User from '../database/models/User';
import * as bcrypt from '../lib/bcrypt';

module.exports = () => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user.email); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((email, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것// 여기의 user가 req.user가 됨
    done(null, email);
  });

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true, // 세션에 저장 여부
    passReqToCallback: true,
  }, (req, email, password, done) => {
      let _user = undefined;
      User.findOne({ where: {email: email}})
      .then(
        user => {
          if(!user) throw new Error('없는 아이디 입니다.');
          else {
            _user = user;
            return bcrypt.compareHash(user.password, password);
          }
        }
      ).then(
        compared => {
          if(!compared) throw new Error('비밀번호가 맞지 않습니다.');
          return done(null, _user);
        }
      ).catch(
        error => {
          return done(error.message);
        }
      ); 
  }));
};