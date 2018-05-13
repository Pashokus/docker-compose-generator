import express from 'express';
import passport from 'passport';
import user from './user';
import signup from './signup';
import signin from './signin';
import generator from './generator';
import '../services/passport';

const reqiureAuth = passport.authenticate('jwt', { session: false });
const reqiureSignin = passport.authenticate('local', { session: false });
const router = new express.Router();

router.use('/user', reqiureAuth, user);
router.use('/signup', signup);
router.use('/signin', reqiureSignin, signin);
router.use('/generator', generator);

export default router;
