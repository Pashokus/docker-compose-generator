import express from 'express';
import seller from '../controllers/user.js';

const router = new express.Router();

router.get('/', seller.getSeller);

export default router;
