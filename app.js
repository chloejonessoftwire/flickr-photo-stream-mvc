const express = require('express');
const app = express();
const testController = require('./controllers/testController');


var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(express.static(__dirname));
app.get('/', testController.getFlickrData);

app.listen(port, () => {
	console.log(`app is listening to port ${port}`);
});