const express = require ('express');
const router = new express.Router();

router.post('/', (req, res, next) => {
    return res.json(req.body);
});

module.exports = router;