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
