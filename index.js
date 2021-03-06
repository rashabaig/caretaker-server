const express = require('express');
const app = express();
const parser = require('body-parser');
const userController = require('./controllers/userController');
const sugarLevelController = require('./controllers/sugarLevelController');
const appointmentController = require('./controllers/appointmentController');
const medicationController = require('./controllers/medicationController');
const doctorController = require('./controllers/doctorController');
const dailyNoteController = require('./controllers/dailyNoteController');
const bloodPressureController = require('./controllers/BloodPressureController');
const weightController = require('./controllers/weightController');

const cors = require('cors');

app.use(parser.json());

app.use(cors());

app.use('/', userController);
app.use('/sugarlevel', sugarLevelController);
app.use('/appointment', appointmentController);
app.use('/medication', medicationController);
app.use('/doctor', doctorController);
app.use('/note', dailyNoteController);
app.use('/bloodpressure', bloodPressureController);
app.use('/weight', weightController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
