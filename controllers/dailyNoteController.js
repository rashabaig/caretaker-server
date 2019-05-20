const express = require('express');
const router = express.Router();
const DailyNoteModel = require('../DB/models/DailyNoteModel');
const UserModel = require('../DB/models/UserModel');

//To Create A New Note -- Works
router.put('/new/:id', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.id })
		.then((user) => {
			console.log(user);
			DailyNoteModel.create(req.body).then((note) => {
				user.notes.push(note._id);
				user.save();
				console.log(user);
			});
			return res.json(user);
		})
		.catch((err) => {
			console.log(err);
		});
});
//To Update A Note
router.put('/update/:dailyNoteID', (req, res) => {
	DailyNoteModel.findOneAndUpdate({ _id: req.params.dailyNoteID }, { $set: req.body })
		.then((note) => {
			res.json(note);
		})
		.catch((err) => {
			console.log(err);
		});
});
//To Delete A Note
router.delete('/:dailyNoteID', (req, res) => {
	DailyNoteModel.findOneAndDelete({ _id: req.params.dailyNoteID })
		.then(() => {
			return res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});
module.exports = router;
