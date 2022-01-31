const express = require('express');

class httpServer {
    port: number;
    constructor(port: number) {
        this.port = port
    }
    start() {
        return new Promise((resolve, reject) => {

        
        const app = express()
        app.use(express.json())

        app.all(["*"], (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            next();
        });


        app.get('/', (req, res) => {
            res.send({ data: 'Sucess' })
            const data = JSON.parse(req.query.a);

            // Close the server after we get the data as the http server is no longer needed
            server.close((err) => {
                console.log('server closed')
            });
            resolve(data)
        });

        const server = app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    });

    }
}

export { httpServer as httpServer }


