import express from 'express';
import * as postCtrl from './post.ctrl';
import passport from 'passport';
import multer from 'multer';

const upload = multer({
  dest: '../../../public/tmp/'
});

const router = express.Router();

router.get('/posts/:id', postCtrl.postById);
router.get('/test', passport.authenticate('local'), (req, res) => {
  res.send('보안 성공적');
})
router.post('/write', upload.array('files'), postCtrl.postWrite);
export default router;