const app = require('express')();
const bodyParser = require('body-parser');
const redis = require('redis');
const publisher = redis.createClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res, next) => {
  publisher.publish('notification', req.body.data, () => console.log('done'));
  res.sendFile(__dirname + '/index.html');
});

app.listen(3001, () => console.log('Server runing on' + 3001));
