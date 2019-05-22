const mongoose = require('../../connection');
const AppointmentModel = new mongoose.Schema({
	doctorName: String,
	purpose: String,
	date: Date,
	time: Date
});

module.exports = mongoose.model('Appointment', AppointmentModel);
