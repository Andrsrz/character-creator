const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	name: { type: String, required: true },
	profession: { type: String, required: true }
});

/* Export Model */
module.exports = mongoose.model('Character', CharacterSchema);
