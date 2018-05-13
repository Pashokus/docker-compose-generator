import express from 'express';
const router = new express.Router();

router.post('/', (req, res, next) => {
    return res.json({a: 'a'});
});

export default router;