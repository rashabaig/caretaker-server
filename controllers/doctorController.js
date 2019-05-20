const express = require('express');
const router = express.Router();
const DoctorModel = require('../DB/models/DoctorModel');
const UserModel = require('../DB/models/UserModel');

//To Create A New Doctor -- Works
router.put('/new/:userID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.userID })
		.then((user) => {
			console.log(user);
			DoctorModel.create(req.body).then((doctor) => {
				user.doctors.push(doctor._id);
				user.save();
				console.log(user);
			});
			return res.json(user);
		})
		.catch((err) => {
			console.log(err);
		});
});

//To Update A Doctor
router.put('/update/:doctorID', (req, res) => {
	DoctorModel.findOneAndUpdate({ _id: req.params.doctorID }, { $set: req.body })
		.then((doctor) => {
			res.json(doctor);
		})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;
