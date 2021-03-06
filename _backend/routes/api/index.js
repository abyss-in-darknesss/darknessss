import express from 'express';
import auth from './auth';
import post from './post';

const router = express.Router();

router.use(auth);
router.use(post);
export default router;
