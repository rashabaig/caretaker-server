const mongoose = require('../../connection');

const UserModel = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	age: Number,
	name: {
		firstName: String,
		lastName: String
	},
	emailAddress: String,
	metrics: [
		{
			type: Schema.Types.ObjectId,
			ref: 'MetricsModel'
		}
	],
	doctors: [
		{
			type: Schema.Types.ObjectId,
			ref: 'DoctorModel'
		}
	],
	appointments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'AppointmentModel'
		}
	],
	medications: [
		{
			type: Schema.Types.ObjectId,
			ref: 'MedicationModel'
		}
	]
});

module.exports = mongoose.model('User', UserModel);
