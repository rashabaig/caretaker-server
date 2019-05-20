const mongoose = require('../../connection');

const DoctorModel = new mongoose.Schema({
	doctorName: String,
	doctorSpecialty: [ String ],
	doctorAddress: {
		street: String,
		city: String,
		state: String,
		zipcode: Number
	},
	doctorPhone: String,
	medications: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Medication'
		}
	],
	appointments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Appointment'
		}
	]
});

module.exports = mongoose.model('Doctor', DoctorModel);
