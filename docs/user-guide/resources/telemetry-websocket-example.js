var connection = new WebSocket('ws://localhost:8080/api/ws');

connection.onopen = function () {
  // authenticating websocket session
  var cmd = {
    authCmd: {
      cmdId: 0,
      token: process.env.JWT_TOKEN
    }
  };
  connection.send(JSON.stringify(cmd));
  // connection is ready to use
};

connection.onerror = function (error) {
  // an error occurred when sending/receiving data
};

connection.onmessage = function (message) {
  // try to decode json (I assume that each message from server is json)
  try {
    var json = JSON.parse(message.data);
    console.log('WS update received: ', json)
  } catch (e) {
    console.log('This doesn\'t look like a valid JSON: ', message.data);
    return;
  }
  // handle incoming message
};