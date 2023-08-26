var satelize = require('satelize');

const express = require('express')
const app = express()

// get public ip address



app.get('/', function (req, res) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip)
    satelize.satelize({
        ip: '103.60.175.222'
    }, function (err, payload) {
        // if used with expressjs
        // res.send(payload);
        // res.json...
        console.log(payload)
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})