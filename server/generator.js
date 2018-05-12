const express = require ('express');
const router = new express.Router();
const yamlConv = require('json2yaml');

router.post('/', (req, res, next) => {
	const yamlFile = yamlConv.stringify(req.body);
    return res.json(yamlFile);
});

module.exports = router;