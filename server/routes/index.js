import express from 'express';
import passport from 'passport';
import user from './user.js';
import signup from './signup.js';
import signin from './signin.js';
import configList from './configList.js';
import '../services/passport.js';

const reqiureAuth = passport.authenticate('jwt', { session: false });
const reqiureSignin = passport.authenticate('local', { session: false });
const router = new express.Router();

router.use('/user', reqiureAuth, user);
router.use('/signup', signup);
router.use('/signin', reqiureSignin, signin);
router.use('/configList', reqiureAuth, configList);

export default router;
