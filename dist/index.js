"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = require("./servers/websocket");
const http_1 = require("./servers/http");
const wss = new websocket_1.webSocket(3001);
const app = new http_1.httpServer(25565);
app.start().then(d => {
    console.log(d);
});
const ws = wss.start();
ws.on('connection', data => {
    console.log('a');
    data.send(JSON.stringify({ type: 'command', payload: 'move()' }));
});
