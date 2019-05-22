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
router.get('/all/:UserID', (req, res) => {
	UserModel.find({ _id: req.params.UserID })
		.then((user) => {
			console.log(user[0].medications);
			DoctorModel.find({
				_id: { $in: user[0].medications }
			}).then((obj) => {
				return res.json(obj);
			});
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

// To Find Doctor By Name -- works
router.get('/:doctorName', (req, res) => {
	let doctorname = req.params.doctorName;
	console.log(doctorname);
	DoctorModel.findOne({ doctorName: doctorname }).then((docter) => {
		res.json(doctor);
	});
});
//To Delete A Doctor
router.delete('/:doctorID', (req, res) => {
	DoctorModel.findOneAndDelete({ _id: req.params.doctorID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
