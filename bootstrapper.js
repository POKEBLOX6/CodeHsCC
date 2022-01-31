// Throw everything in a try catch to supress the syntax errors

function start() {
    try {
        sendData();
    } catch (e) {
        console.log(`${e}`);
    }
}


// We actually don't need to map the world anymore as twe can just log the editorData variable that has every single map in it.


function sendData() {
    try {
        fetch("http://localhost:25565?a=" + JSON.stringify(editorData), {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (e) {
        console.log(`${e}`)
    }
}

function receiveData() {
    const connection = new WebSocket('ws://localhost:3001');
    connection.onmessage = e => {
        console.log(e.data)
    }
}