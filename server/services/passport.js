import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import jwt from 'jwt-simple';
import User from '../models/user.js';
import config from '../config.js';

const localLoginOptions = {
    usernameField: 'username',
    passReqToCallback: true,
};

function tokenForUser(user) {
    return jwt.encode({ sub: user.id ? user.id : user._id }, config.secret);
}

const LocalLogin = new LocalStrategy(localLoginOptions, ((req, username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (user) {
            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return done(err);
                }

                if (!isMatch) {
                    return done(null, false);
                }

                return done(null, { user, type: 'user' });
            });
        } else {
            return done(null, false);
        }
    });
}));

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret,
};

const jwtLogin = new Strategy(jwtOptions, ((payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return done(err);
        }

        if (user) {
            return done(null, user);
        }
    });
}));

passport.use(jwtLogin);
passport.use(LocalLogin);
