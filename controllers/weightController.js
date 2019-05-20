const express = require('express');
const router = express.Router();
const WeightModel = require('../DB/models/WeightModel');
const UserModel = require('../DB/models/UserModel');
// create new weight -- works
router.put('/:UserID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.UserID })
		.then((user) => {
			console.log(user);
			WeightModel.create(req.body).then((weightNew) => {
				user.weight.push(weightNew._id);
				weightNew.save();
                console.log(user);
                return res.sendStatus(200)
			});
		
		})
		.catch((err) => {
			console.log(err);
		});
});
// delete weight -- works
router.delete('/:weightID', (req, res) => {
	WeightModel.findOneAndDelete({ _id: req.params.weightID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});
// update weight -- works
router.put('/update/:weightID', (req, res) => {
	WeightModel.findOneAndUpdate({ _id: req.params.weightID },{$set: req.body})
		.then(() => {res.sendStatus(200)})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
