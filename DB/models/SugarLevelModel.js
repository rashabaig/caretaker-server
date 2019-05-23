const mongoose = require('../../connection');

var SugarLevel = new mongoose.Schema({
	sugarLevelBeforeMeal: Number,
	sugarLevelAfterMeal: Number,
	date: Date
});

module.exports = mongoose.model('SugarLevel', SugarLevel);
