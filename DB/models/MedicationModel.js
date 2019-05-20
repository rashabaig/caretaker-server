const mongoose = require('../../connection');
const MedicationModel = new mongoose.Schema({
	medicationName: String,
	purpose: [ String ],
	dosage: String,
	startDate: String,
	endDate: String
});

module.exports = mongoose.model('Medication', MedicationModel);
