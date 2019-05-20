const mongoose = require('../../connection');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		firstName: String,
		lastName: String
	},
	emailAddress: String,
	metrics: [ MetricsModel ],
	doctors: [ DoctorModel ],
	appointments: [ AppointmentModel ],
	medications: [ MedicationModel ]
});

module.exports = mongoose.model('User', UserModel);
