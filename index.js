const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const path = require('path');

const http = require('http').createServer(app);

app.use(express.urlencoded({extended: true})) 

app.use(express.static(path.join(__dirname, '../CLIENT/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../CLIENT/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});