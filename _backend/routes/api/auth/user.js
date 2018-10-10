import express from 'express';
import User from '../../../database/models/User.js';
import * as bcrypt from '../../../lib/bcrypt';
import * as userCtrl from './user.crtl';

const router = express.Router();

router.get('/test', (req, res) => {
  console.log(User);
  
  User.findAll()
    .then((results) => {
      res.json(results);
    }).catch(function(err) {
      console.log(err);
    });
});

router.post('/signup', userCtrl.signup);

router.post('/login', async (req, res) => {
  if(  await bcrypt.compareHash('$2b$10$kHuGbA7gPAgIFecb0AgnbuWzJitGGeVUxRo6tKQ4pfS5mNkMx0WvC', req.body.password)) res.send('맞는 비밀번호')
  else res.send('틀린 비밀번호');
})
router.post('/send', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  res.send('test success');
})

export default router;