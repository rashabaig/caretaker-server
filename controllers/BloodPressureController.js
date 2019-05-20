const express = require('express');
const router = express.Router();
const BloodPressureModel = require('../DB/models/BloodPressureModel');
const UserModel = require('../DB/models/UserModel');
// create new bloodPressure -- works
router.put('/:UserID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.UserID })
		.then((user) => {
			console.log(user);
			BloodPressureModel.create(req.body).then((bloodPressureNew) => {
				user.bloodPressure.push(bloodPressureNew._id);
				bloodPressureNew.save();
				console.log(user);
			});
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});
// delete bloodPressure -- works
router.delete('/:bloodPressureID', (req, res) => {
	BloodPressureModel.findOneAndDelete({ _id: req.params.bloodPressureID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});
// update bloodPressure -- works
router.put('/update/:bloodPressureID', (req, res) => {
	BloodPressureModel.findOneAndUpdate({ _id: req.params.bloodPressureID },{$set: req.body})
		.then(() => {res.sendStatus(200)})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
