const WebSocket = require('ws');

const ws = new WebSocket('wss://tti.tiwiconnect.com/api/wsrpc');

ws.on('open', function open() {

                  // Web Socket is connected, send data using send()
                ws.send('{"jsonrpc":"2.0","id":3,"method":"srvWebSocketAuth","params": {"varName": "GDO_EMAIL_GOES_HERE","apiKey": "APIKEY_GOES_HERE"}}'); //CHANGE VARIABLES
});


                   ws.on('message', function incoming(data) {

ws.send('{"jsonrpc":"2.0","method":"gdoModuleCommand","params":{"msgType":16,"moduleType":5,"portId":7,"moduleMsg":{"doorCommand":0},"topic":"DEVICE_ID_HERE"}}'); //CHANGE DEVICE ID
ws.ping();
console.log('CLOSING');
});

ws.on('pong', function pong() {
    ws.terminate();
});
