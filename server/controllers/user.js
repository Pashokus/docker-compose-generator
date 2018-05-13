import jwt from 'jwt-simple';
import User from '../models/user';
import config from '../config';

const getSeller = (req, res, next) => {
    const userId = jwt.decode(req.get('authorization'), config.secret);

    User.findById(userId.sub, (err, user) => {
        if (err) {
            return next(err);
        }

        if (user) {
            const { _id } = user;
            const updatedSeller = Object.assign({}, user._doc, { id: _id });
            delete updatedSeller._id;
            delete updatedSeller.password;
            delete updatedSeller.__v;
            return res.json({ user: updatedSeller });
        }

        return next();
    });
};

export default {
    getSeller
}