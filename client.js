const net = require('net');
let guests = [];
let num = 0;
let name = "";

let client = net.createConnection({port: 5000}, () => {
    num = num + 1;
    name = "Guest" + num + "";
    console.log('Welcome, ' + name);
    guests.push(name);
    console.log(name);
    console.log(num);
});

client.on('data', function(data){
    console.log(data.toString());
});

client.on('end', function() {
    console.log('the server disconnected.');
});