const express = require('express');
const app = express();
const parser = require('body-parser');
const userController = require('./controllers/userController');
const sugarlevelController = require('./controllers/sugarlevelController');
const bloodPressureController = require('./controllers/BloodPressureController')
const weightController = require('./controllers/weightController')

const cors = require('cors');

app.use(parser.json());

app.use(cors());

app.use('/', userController);
app.use('/sugarlevel', sugarlevelController);
app.use('/bloodpressure', bloodPressureController);
app.use('/weight', weightController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
