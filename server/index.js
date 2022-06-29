const express = require('express');
const http = require('http');
const { default: mongoose } = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.json());

const DB = "mongodb+srv://tictactoe:threeinarow3@cluster0.gczie.mongodb.net/?retryWrites=true&w=majority";

io.on('connection', (socket) => {
    console.log("Connection established");
});

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch(err => {
    console.log(err);
});

server.listen(port, '0.0.0.0', () => {
    console.log(`listening on port ${port}`);
});
