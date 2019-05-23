const express = require('express');
const router = express.Router();
const SugarLevelModel = require('../DB/models/SugarLevelModel');
const UserModel = require('../DB/models/UserModel');
// create new sugarlevel data -- works
router.put('/:UserID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.UserID })
		.then((user) => {
			console.log(req.body);
			SugarLevelModel.create(req.body).then((sugar) => {
				user.sugarLevel.push(sugar._id);
				user.save();
				sugar.save();
				// console.log(user);
				return res.sendStatus(200);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

// remove sugarlever data -- works
router.delete('/:sugarLevelID', (req, res) => {
	SugarLevelModel.findOneAndDelete({ _id: req.params.sugarLevelID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

// update data in sugarlevel -- works
router.put('/update/:sugarLevelID', (req, res) => {
	SugarLevelModel.findOneAndUpdate({ _id: req.params.sugarLevelID }, { $set: req.body })
		.then((sugarLevel) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

// To find all blood sugar -- works
router.get('/:UserID', (req, res) => {
	UserModel.find({ _id: req.params.UserID })
		.then((user) => {
			console.log(user[0].sugarLevel);
			SugarLevelModel.find({
				_id: { $in: user[0].sugarLevel }
			}).then((obj) => {
				return res.json(obj);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
