const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

app.use(cors);

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'123456',
    database:'DGAPP_BD'
});

app.get('/hackathon', (req, res) => {
    db.query('SELECT * FROM HACKATHON', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
});

app.listen(3001,() => {
console.log("conectado");

});