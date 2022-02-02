import * as WebSocket from 'ws';

class webSocket {
    port: number;
    constructor(port: number) {
        this.port = port;
    }

    start() {
        const wss = new WebSocket.Server({port: this.port})

        return wss;
    }
}

export {webSocket as webSocket}