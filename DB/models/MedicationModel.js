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
	startDate: Date,
	endDate: Date
});

module.exports = mongoose.model('Medication', MedicationModel);
