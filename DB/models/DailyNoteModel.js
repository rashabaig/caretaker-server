const mongoose = require('../../connection');
const DailyNoteModel = new mongoose.Schema({
	date: String,
	symptoms: String
});
module.exports = mongoose.model('DailyNote', DailyNoteModel);
