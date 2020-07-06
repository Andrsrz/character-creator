const express = require('express');
const router = express.Router();

/* Require Controller Modules */
var characterController = require('../controllers/character');

/* Character Routes */
router.get('/', characterController.characters);

module.exports = router;
