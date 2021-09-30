const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const path = require('path');

app.use(express.urlencoded({extended: true})) 

const http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '../CLIENT/build')));

app.post('/login', function (req, res) {
    console.log(req)
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../CLIENT/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
}); 