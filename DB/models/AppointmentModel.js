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
	date: String,
	time: String
});

module.exports = mongoose.model('Appointment', AppointmentModel);
