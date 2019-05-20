const mongoose = require('../../connection');

const UserModel = new mongoose.Schema({
	username: String,
	password: String,
	age: Number,
	name: {
		firstName: String,
		lastName: String
	},
	emailAddress: String,
	metrics: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'MetricsModel'
		}
	],
	doctors: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'DoctorModel'
		}
	],
	appointments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'AppointmentModel'
		}
	],
	medications: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'MedicationModel'
		}
	],
	notes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'DailyNoteModel'
		}
	]
});

module.exports = mongoose.model('User', UserModel);
