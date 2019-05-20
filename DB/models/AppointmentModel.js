const mongoose = require('../../connection');
const AppointmentModel = new mongoose.Schema({
	doctorName: String,
	doctorAddress: {
		street: String,
		city: String,
		state: String,
		zipcode: Number
	},
	purpose: String,
	date: Date
});

module.exports = mongoose.model('Appointment', AppointmentModel);
