const mongoose = require('../../connection');

const UserModel = new mongoose.Schema({
	userName: String,
	password: String,
	dateOfBirth: String,
	firstName: String,
	lastName: String,
	emailAddress: String,
	// metrics: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'MetricsModel'
	// 	}
	// ],

	doctors: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Doctor'
		}
	],
	appointments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Appointment'
		}
	],
	medications: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Medication'
		}
	],
	notes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'DailyNote'
		}
	],
	sugarLevel: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'SugarLevel'
		}
	],
	bloodPressure: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BloodPressure'
		}
	],
	weight: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Weight'
		}
	]
});

module.exports = mongoose.model('User', UserModel);
