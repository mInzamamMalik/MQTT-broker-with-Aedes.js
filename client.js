// const mqtt = require('mqtt');
// var client = mqtt.connect('mqtt://iot.eclipse.org');

// client.on('connect', function () {
//     client.subscribe('Topic07');
//     console.log('client has subscribed successfully');
// });

// client.on('connect', function () {
//     setInterval(function () { client.publish('Topic07', 'cricket'); }, 3000);
// });

// client.on('message', function (topic, message) {
//     console.log(message.toString()); //if toString is not given, the message comes as buffer
// });


var aedes = require('aedes')()



