import jwt from 'jwt-simple';
import User from '../models/user.js';
import config from '../config.js';

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

const signup = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(422).send({ error: 'You have to provide email and password' });
    }

    if (!req.body.username) {
        return res.status(422).send({ error: 'You have to provide username' });
    }

    try {
        const existingUser = await User.findOne({ username: req.body.username });

        if (existingUser) {
            return res.status(422).send({ error: 'Username is in use' });
        }

        const user = new User({
            email: req.body.email, password: req.body.password, username: req.body.username
        });

        await user.save()

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
    } catch (error) {
        return next(error);
    }
};

export default {
    signin,
    signup
}
