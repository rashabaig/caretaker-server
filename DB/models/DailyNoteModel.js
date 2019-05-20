const mongoose = require('../../connection');
const DailyNoteModel = new mongoose.Schema({
	date: Date,
	symptoms: [ String ]
});
module.exports = mongoose.model('DailyNote', DailyNoteModel);
