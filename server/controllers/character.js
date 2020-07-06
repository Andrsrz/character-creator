var Character = require('../models/character');

/* Display list of Characters */
exports.characters = (req, res, next) => {
	Character.find()
		  .populate('character')
		  .sort([['name', 'ascending']])
		  .exec((err, characters) => {
		if(err)
			return next(err);
		/* Success */
		res.json(characters);
	});
};

/* Create new Character */
exports.create_character = (req, res, next) => {
	let character = new Character({
		name: req.body.name,
		profession: req.body.profession
	});

	character.save((err) => {
		if(err)
			return next(err);

		/* Success */
		res.status(201).json(character);
	});
};
