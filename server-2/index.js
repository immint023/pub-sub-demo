const app = require('express')();
const redis = require('redis');
const subscriper = redis.createClient();

subscriper.subscribe('notification');
subscriper.on('message', (channel, message) => {
  console.log(`Message: ${message} on ${channel}`);
});

app.listen(3002, () => console.log('Server runing on ' + 3002));
