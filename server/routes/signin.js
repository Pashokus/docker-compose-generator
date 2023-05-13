import express from 'express';
import authentication from '../controllers/authentication.js';

const router = new express.Router();

router.post('/', authentication.signin);

export default router;
