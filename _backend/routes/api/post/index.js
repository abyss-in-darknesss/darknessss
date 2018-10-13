import express from 'express';
import post from './post';

const router = express.Router();

router.use(post);

export default router;
