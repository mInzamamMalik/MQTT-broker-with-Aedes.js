var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function (connection) {

    console.log("connected to broker", connection);

    client.subscribe('test', function (err) {
        if (!err) {
            //   client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log("message received: ", message.toString())
    client.end()
})


// var aedes = require('aedes')()



// aedes.subscribe("test",
//     function (packet, cb) {
//         console.log("packet received: ",  packet.payload.toString()   );
//         cb(); //call this after receiving message
//     },
//     function () { // one time callback
//         console.log("listening for topic test");
//     })


