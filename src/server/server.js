const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {

    console.log('A new client connected')

    ws.send('Welcome new client');

    ws.on('error', console.error);
  
    ws.on('message', function message(data) {
      console.log('received: %s', data.toString());
      ws.send('Your message is: ' + message);
    });
  
    ws.send('something');
  });

app.get("/", (req, res) => res.send("Hello World"));

server.listen(8081, () => console.log('Listening on port: 8081'))
