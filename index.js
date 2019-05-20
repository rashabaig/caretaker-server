const express = require('express');
const app = express();
const parser = require('body-parser');
const userController = require('./controllers/userController');

const cors = require('cors');

app.use(parser.json());

app.use(cors());

app.use('/', userController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
