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
//To Update A Medication
router.put('/update/:medicationID', (req, res) => {
	MedicationModel.findOneAndUpdate({ _id: req.params.medicationID }, { $set: req.body })
		.then((medication) => {
			res.json(medication);
		})
		.catch((err) => {
			console.log(err);
		});
});

//To Find medication By ID
// router.get('/:medicationName', (req, res) => {
// 	let medicationId = req.params.userID;
// 	console.log(userID);
// 	MedicationModel.findOne({ medicationName: medicationName }).then((user) => {
// 		res.json(user);
// 	});
// });

module.exports = router;
