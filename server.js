const aedes = require('aedes')()
const server = require('http').createServer(aedes.handle)
const port = 8888

server.listen(port, function () {
    console.log('server started and listening on port ', port)
})

aedes.on('clientError', function (client, err) {
    console.log('client error', client.id, err.message, err.stack)
})

aedes.on('connectionError', function (client, err) {
    console.log('client error', client, err.message, err.stack)
})

aedes.on('publish', function (packet, client) {
    if (client) {
        console.log('message from client', client.id)
    }
})

aedes.on('subscribe', function (subscriptions, client) {
    if (client) {
        console.log('subscribe from client', subscriptions, client.id)
    }
})



aedes.subscribe("test",
    function (packet, cb) {
        console.log("packet received: ",  packet.payload.toString()   );
        cb(); //call this after receiving message
    },
    function () { // one time callback
        console.log("listening for topic test");
    })

aedes.on('client', function (client) {
    console.log('new client', client.id)
})


var packet = {
    cmd: 'publish',
    messageId: 42,
    qos: 2,
    dup: false,
    topic: 'test',
    payload: Buffer.from('=============>some test message'),
    retain: false,
    properties: { // optional properties MQTT 5.0
        payloadFormatIndicator: true,
        messageExpiryInterval: 4321,
        topicAlias: 100,
        responseTopic: 'topic',
        correlationData: Buffer.from([1, 2, 3, 4]),
        userProperties: {
            'test': 'test'
        },
        subscriptionIdentifier: 120, // can be an Array in message from broker, if message included in few another subscriptions
        contentType: 'test'
    }
}

setInterval(() => {

    aedes.publish(packet, (err) => {
        if (!err) {
            console.log("seccess publish topic test");
        } else {
            console.log("err publish");
        }
    })

}, 3000)

