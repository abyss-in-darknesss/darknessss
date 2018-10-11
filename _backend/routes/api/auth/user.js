import express from 'express';
import User from '../../../database/models/User.js';
import UserProfile from '../../../database/models/UserProfile';

import * as userCtrl from './user.crtl';
import passport from 'passport';
import isLoggedIn from '../../../middleware/isLoggedIn';

const router = express.Router();

router.get('/test', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.end('로그인 된 상태입니다.')
});

router.post('/signin', passport.authenticate('local'), userCtrl.signin);

router.get('/logout', userCtrl.logout);

router.post('/signup', userCtrl.signup);

// router.get('/profile', (req, res) => {
//   UserProfile.create({
//     user_id: 9,
//     nickname: 'asd',
//     user_img: 'asdasdas',
//     introduction: 'asdasdasdas',
//   }).then(result => {
//     console.log(result);
//     res.send('성공')
//   }).catch(err => {
//     console.log(err);
//     res.send('실패')
//   });
// });

export default router;