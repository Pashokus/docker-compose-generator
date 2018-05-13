import jwt from 'jwt-simple';
import User from '../models/user';
import config from '../config';
import { buildUserObject } from '../helpers';

const getSeller = (req, res, next) => {
    const userId = jwt.decode(req.get('authorization'), config.secret);

    User.findById(userId.sub, (err, user) => {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.json({ user: buildUserObject(user) });
        }

        return next();
    });
};

export default {
    getSeller
}