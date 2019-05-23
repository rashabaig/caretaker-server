const express = require('express');
const router = express.Router();
const MedicationModel = require('../DB/models/MedicationModel');
const UserModel = require('../DB/models/UserModel');

//To Create A New Medication -- Works
router.put('/new/:id', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.id })
		.then((user) => {
			console.log(user);
			MedicationModel.create(req.body).then((medication) => {
				user.medications.push(medication._id);
				user.save();
				console.log(user);
			});
			return res.json(user);
		})
		.catch((err) => {
			console.log(err);
		});
});
//To Update A Medication -- works
router.put('/update/:medicationID', (req, res) => {
	MedicationModel.findOneAndUpdate({ _id: req.params.medicationID }, { $set: req.body })
		.then((medication) => {
			res.json(medication);
		})
		.catch((err) => {
			console.log(err);
		});
});

// To Find Medication By Name -- works
router.get('/:medicationName', (req, res) => {
	let medicationname = req.params.medicationName;
	console.log(medicationname);
	MedicationModel.findOne({ medicationName: medicationname }).then((medication) => {
		res.json(medication);
	});
});

//To Delete A Medication
router.delete('/:medicationID', (req, res) => {
	MedicationModel.findOneAndDelete({ _id: req.params.medicationID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/all/:UserID', (req, res) => {
	UserModel.find({ _id: req.params.UserID })
		.then((user) => {
			console.log(user[0].medications);
			MedicationModel.find({
				_id: { $in: user[0].medications }
			}).then((obj) => {
				return res.json(obj);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;
