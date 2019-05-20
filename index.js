const express = require('express');
const app = express();
const parser = require('body-parser');
const userController = require('./controllers/userController');
const sugarlevelController = require('./controllers/sugarlevelController');
<<<<<<< HEAD
const appointmentController = require('./controllers/appointmentController');
const medicationController = require('./controllers/medicationController');
const doctorController = require('./controllers/doctorController');
const dailyNoteController = require('./controllers/dailyNoteController');

const cors = require('cors');

app.use(parser.json());

app.use(cors());

app.use('/', userController);
app.use('/sugarlevel', sugarlevelController);
app.use('/appointment', appointmentController);
app.use('/medication', medicationController);
app.use('/doctor', doctorController);
app.use('/note', dailyNoteController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
