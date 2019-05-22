const express = require('express');
const router = express.Router();
const AppointmentModel = require('../DB/models/AppointmentModel');
const UserModel = require('../DB/models/UserModel');

//To Create A New Appointment -- Works
router.put('/new/:id', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.id })
		.then((user) => {
			console.log(user);
			AppointmentModel.create(req.body.data).then((appointment) => {
				user.appointments.push(appointment._id);
				user.save();
				appointment.save()
				console.log(user);
				return res.json(user);
			});
			
		})
		.catch((err) => {
			console.log(err);
		});
});

//To Update An Appointment

router.put('/update/:appointmentID', (req, res) => {
	AppointmentModel.findOneAndUpdate({ _id: req.params.appointmentID }, { $set: req.body })
		.then((appointment) => {
			res.json(appointment);
		})
		.catch((err) => {
			console.log(err);
		});
});

//To Delete An Appointment
router.delete('/:appointmentID', (req, res) => {
	AppointmentModel.findOneAndDelete({ _id: req.params.appointmentID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});
// return all appointments for user
router.get('/:UserID', (req, res) => {
	UserModel.find({ _id: req.params.UserID })
		.then((user) => {
			console.log(user[0].appointments)
			AppointmentModel.find({
				'_id': { $in: user[0].appointments}
			}).then(obj =>{
				console.log(obj)
				return res.json(obj)
			})
			})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;
