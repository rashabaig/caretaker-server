const mongoose = require('../../connection');
const AppointmentModel = new mongoose.Schema({
	doctorName: String,
	purpose: String,
	date: String,
	time: String
});

module.exports = mongoose.model('Appointment', AppointmentModel);
