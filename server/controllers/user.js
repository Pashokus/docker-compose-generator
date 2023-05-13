import jwt from 'jwt-simple';
import User from '../models/user.js';
import config from '../config.js';
import { buildUserObject } from '../helpers.js';

const getSeller = async (req, res, next) => {
    const userId = jwt.decode(req.get('authorization'), config.secret);

    try {

        const user = await User.findById(userId.sub);
        if (user) {
            return res.json({ user: buildUserObject(user) });
        }

        return next();
    } catch (err) {
        return next(err);
    }
};

export default {
    getSeller
}