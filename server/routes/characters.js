const express = require('express');
const router = express.Router();

/* Require Controller Modules */
var characterController = require('../controllers/character');

/* Character Routes */
router.get('/', characterController.characters);
router.post('/', characterController.create_character);

module.exports = router;
