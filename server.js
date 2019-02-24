const net = require('net');
let num = 1;

let server = net.createServer(socket => {
    console.log("Guest" + num++ + " connected.");
    let guestName = "Guest" + num;
    socket.on('end', () => {
        console.log(guestName + ' disconnected.');
    });
}).listen(5000, () => {
    console.log('Server is running.');
});

server.on('error', (err) => {
    throw err;
});

