const express = require('express');
const router = express.Router();
const UserModel = require('../DB/models/UserModel');

//To Create New User - works
router.post('/', (req, res) => {
	let newUser = req.body;
	UserModel.create(newUser).then((newUser) => {
		res.json(newUser);
		newUser.save();
	});
});

//To Find All Users - works
router.get('/', (req, res) => {
	UserModel.find({}).then((allusers) => {
		res.json(allusers);
	});
});

//To Find User By ID
router.get('/:userID', (req, res) => {
	let userId = req.params.userID;
	console.log(userID);
	UserModel.findOne({ _id: userId }).then((user) => {
		res.json(user);
	});
});
//To Delete A User
router.delete('/:userID', (req, res) => {
	UserModel.deleteOne({ _id: req.params.userID }).then((deleted) => {
		res.json(deleted);
	});
});
//To Update A User
router.put('/update/:userID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.userID }, { $set: req.body })
		.then((user) => {
			res.json(user);
		})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;
