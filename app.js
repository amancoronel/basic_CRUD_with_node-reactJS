const express = require('express');
const app = express();
const path = require('path');
let PORT = process.env.port || 5000;

require('./middlewares')(app, __dirname)
require('./routes')(app);

Players = [
    {   
        id : 1,
        name : "Player 1",
        age : 20
    },
    {
        id : 2,
        name : "Player 2",
        age : 25
    },
    {
        id : 3,
        name : "Player 3",
        age : 39
    }
]

app.listen(PORT, () => {
    console.log("Server running on port "+PORT);
})