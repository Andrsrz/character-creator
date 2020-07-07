const express = require('express');
const router = express.Router();
const path = require('path');

/* Require Controller Modules */
var characterController = require(path.join(__dirname, '../controllers/character'));

/* Character Routes */
router.get('/', characterController.characters);
router.post('/', characterController.create_character);

module.exports = router;
