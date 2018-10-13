import express from 'express';
import { isLogin } from '../../../middleware';
import * as userCtrl from './user.crtl';
import passport from 'passport';

const router = express.Router();

router.get('/test', isLogin, (req, res) => {
  console.log(req.user);
  res.end('로그인 된 상태입니다.')
});

router.post('/signin', passport.authenticate('local'), userCtrl.signin);

router.get('/logout', userCtrl.logout);

router.post('/signup', userCtrl.signup);

export default router;