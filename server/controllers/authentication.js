import jwt from 'jwt-simple';
import User from '../models/user';
import config from '../config';

const tokenForUser = user => jwt.encode({ sub: user.id ? user.id : user._id }, config.secret);

const signin = (req, res, next) => {
    if (req.user.type === 'user') {
        const {
            username, email, _id
        } = req.user.user;

        res.send({
            token: tokenForUser(req.user.user),
            user: {
                username, email, id: _id
            },
        });
    } else {
        return next('signin failed due unknown err');
    }
};

const signup = (req, res, next) => {
    const { email, username } = req.body;
    let { password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'You have to provide email and password' });
    }

    if (!username) {
        return res.status(422).send({ error: 'You have to provide username' });
    }

    User.findOne({ username }, (err, existingUser) => {
        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res.status(422).send({ error: 'Username is in use' });
        }

        const user = new User({
            email, password, username
        });

        user.save((err) => {
            if (err) {
                return next(err);
            }

            const {
                username, email, _id
            } = user;

            res.json({
                token: tokenForUser(user),
                user: {
                    username,
                    email,
                    id: _id,
                },
            });
        });
    });
};

export default {
    signin,
    signup
}
