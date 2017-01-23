import express from 'express';
import superagent from 'superagent';

import path from 'path';
let events = require("events");

let emitter = new events.EventEmitter()

        //监听setCookeie事件

// import Mail from 'N';

import {format} from './app/src/services/common';
let app = express();
// let url = 'https://cnodejs.org';
let url = 'http://172.16.5.10:8081/';

let headers = {
			Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
 'Accept-Encoding': 'gzip, deflate',
 'Accept-Language':	'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
 'Connection':'keep-alive',
 Cookie: 'loginName=yanyj; JSESSIONID=4EA7B30A217C669BB6739C11BE376AC4; yanyj=password',
 'Host':'172.16.5.10:8081',
 Referer:'0http://172.16.5.10:8081/login!logout.action',
	expires: '30'
};

let loginName = 'yanyj';
let ID = '2A8646A52D9093F6CF2CEF61B5725CC7';
app.use(express.static(path.join(__dirname, '/')));


app.get('/tx', (req, res) => {
	let count = 1;
		let date = format(new Date(), 'yyyy-MM-dd');
		superagent.post('http://172.16.5.10:8081/base/task!saveTm.action?taskdate=' + date)
		.set(headers)
		.type("form")
		.send({
			'id': '',
			'version': '',
			'taskid': '',
			'befiled': '',
			'parentProject': '',
			'content': 'DB设计',
			'normaltime': '8.0',
			'overtime': '',
			'backaccount': '',
			'taskStage': '37050',
			'taskName': 'DB设计',
			'PM': '刘培军',
			'projectid': '78851930'
		})
		.end((err, data) => {
			// console.log(JSON.parse(data.text) + count++);
			 // res.send(JSON.parse(data.text)+ count++);
			 res.send(data.text + count++);

		});


});

//
const setCookie = (cookie, ) => {
	superagent.get('http://172.16.5.10:8081/login!index.action')
	.set(headers)
	.end((err, data) => {
		res.send(data)
	});
};

emitter.on("setCookeie", setCookie) ;

app.get('/login', (req, res) => {
		superagent.post('http://172.16.5.10:8081/login!login.action')
		.type("form")
		.send({loginName:"yanyj",password:"password"})
		.redirects(1)
		.end((err, data) => {
			// console.log(JSON.parse(data.text) + count++);
			 // res.send(JSON.parse(data.text)+ count++);

			let action = JSON.parse(data.text).obj;

		});




}).listen(8888, (error) => {
	if (error) {
		console.log('服务启动失败！请查看' + error.stack);
	}
	console.log('服务启动成功！\n请访问： http://localhost:8888......');
});



