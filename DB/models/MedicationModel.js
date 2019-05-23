const mongoose = require('../../connection');
const MedicationModel = new mongoose.Schema({
	medicationName: String,
	doctor: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Doctor'
		}
	],
	purpose: [ String ],
	dosage: String,
	startDate: String,
	endDate: String
});

module.exports = mongoose.model('Medication', MedicationModel);
