import express from 'express';
import authentication from '../controllers/authentication';

const router = new express.Router();

router.post('/', authentication.signup);

export default router;
