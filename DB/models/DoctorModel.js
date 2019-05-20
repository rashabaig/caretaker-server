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
	doctorPhone: [ String ],
	medications: [ MedicationModel ],
	appointments: [ AppointmentModel ]
});

module.exports = mongoose.model('Doctor', DoctorModel);
