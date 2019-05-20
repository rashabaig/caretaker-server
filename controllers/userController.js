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
//To Find User By Name
// router.get('/:name', (req, res) => {
// 	let userName = req.params.name;
// 	UserModel.findOne({ name: userName }).then((user) => {
// 		res.json(user);
// 	});
// });

//To Find User By ID
router.get('/:ID', (req, res) => {
	let userID = req.params.ID;
	console.log(userID);
	UserModel.findOne({ _id: userID }).then((user) => {
		res.json(user);
	});
});
//To Delete A User
router.delete('/:id', (req, res) => {
	UserModel.deleteOne({ _id: req.params.id }).then((deleted) => {
		res.json(deleted);
	});
});
module.exports = router;
