const mongoose = require('../../connection');

var SugarLevel = new mongoose.Schema({
	beforeMeal: {
		sugarLevel: Number,
		date: Date
	},
	afterMeal: {
		sugarLevel: Number,
		date: Date
	}
});

module.exports = mongoose.model('SugarLevel', SugarLevel);
