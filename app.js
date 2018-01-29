const express = require('express');
const axios = require('axios');

const app = express();

function getRandom() {
    return Math.round(Math.random() * 9999999999);
}

setInterval(function () {
    axios({
        url: 'http://www.dnf-me.cn?action=add',
        method: 'post',
        data: {
            ip: `${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}`,
            j_dh: getRandom(),
            j_xm: getRandom(),
        },
    }).then(function () {
        console.log('yes');
    });
}, 30);

app.listen('6661');
