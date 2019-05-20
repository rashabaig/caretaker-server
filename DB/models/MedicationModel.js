const mongoose = require('../../connection');
const MedicationModel = new mongoose.Schema({
	medicationName: String,
	purpose: [ String ],
	dosage: String,
	startDate: Date,
	endDate: Date
});

module.exports = mongoose.model('Medication', MedicationModel);
