const express = require('express');
const router = new express.Router();
const generator = require('./generator');

router.use('/generator', generator);

module.exports = router;