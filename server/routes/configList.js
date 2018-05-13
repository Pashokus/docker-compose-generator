import express from 'express';
import User from '../models/user';
import {buildUserObject} from "../helpers";

const router = new express.Router();

router.post('/', (req, res, next) => {
    const config = req.body;
    const { _id } = req.user;

    User.findOne({ _id }, (err, user) => {
        if (err) {
           return next(err);
        }

        if (user) {
            user.files.push(config);
            user.markModified('files');

            user.save((err, updatedUser) => {
                if (err) {
                    return next(err);
                }

                if (updatedUser) {
                    return res.json({ user: buildUserObject(updatedUser) });
                }

                return res.json({ error: 'problems with updating current user' });
            })
        } else {
            return res.json({ error: 'there is no authenticated user'});
        }
    });
});

export default router;