import { webSocket } from "./servers/websocket";
import { httpServer } from './servers/http'
const wss = new webSocket(3001);
const app = new httpServer(25565);

app.start().then(d => {
    console.log(d)
});

const ws = wss.start();
ws.on('connection', data => {
    console.log('a')
    data.send(JSON.stringify({ type: 'command', payload: 'move()' }))
})

