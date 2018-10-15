import express from 'express';
import * as postCtrl from './post.ctrl';
import { upload, isLogin } from '../../../middleware';

const router = express.Router();

router.get('/posts', postCtrl.getPostsAll);
router.get('/post', postCtrl.getPostById);
router.post('/post/write', isLogin, upload.array('files') , postCtrl.postWrite);

export default router;