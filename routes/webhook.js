var chatService = require('../server/chatService');

var express = require('express');
var router = express.Router();

/* GET hello world page. */
router.get('/', function(req, res, next) {
	if (chatService.authenticate(req)) {
		res.send(1613044729);
	}
	else {
		res.status(401).send();
	}
});

module.exports = router;
