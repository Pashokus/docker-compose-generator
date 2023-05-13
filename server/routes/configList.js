import express from 'express';
import User from '../models/user.js';
import { buildUserObject } from "../helpers.js";

const router = new express.Router();

router.post('/', async (req, res, next) => {
    const config = req.body;
    const { _id } = req.user;

    try {
        const user = await User.findOne({ _id })

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
            return res.json({ error: 'there is no authenticated user' });
        }
    } catch (err) {
        return next(err);
    }
});

export default router;