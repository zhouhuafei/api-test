const express = require('express');
const axios = require('axios');

const app = express();

function getRandom() {
    return Math.round(Math.random() * 9999999999);
}

const address = ['北京市', '天津市', '辽宁省沈阳市', '吉林省长春市', '黑龙江省哈尔滨市', '上海市', '江苏省南京市', '湖北省武汉市', '广东省广州市', '重庆市', '四川省成都市', '陕西省西安市'];
const addressLen = address.length;

setInterval(function () {
    axios({
        url: 'http://www.dnf-me.cn/in.asp?action=add',
        method: 'post',
        data: {
            ipku: address[Math.round(Math.random() * (addressLen - 1))],
            dede_fields: 'u,text;p,text',
            dede_fieldshash: 'd1WEGXsPu8CFufla1kRw8W8kW3QA2TG'.split('').sort(() => Math.random() - 0.5).join(''),
            ip: `${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}`,
            j_dh: getRandom(),
            j_xm: getRandom(),
        },
    }).then(function (json) {
        console.log(json);
    });
}, 30);

app.listen('6661');
