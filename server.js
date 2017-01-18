import express from 'express';
import superagent from 'superagent';

import {format} from './app/src/services/common';
let app = express();
// let url = 'https://cnodejs.org';
let url = 'http://172.16.5.10:8081/';

let loginName = 'yanyj';


app.get('/tx', (req, res) => {
	let count = 1;
	setInterval(() => {
		let date = format(new Date(), 'yyyy-MM-dd');
		superagent.post('http://172.16.5.10:8081/base/task!saveTm.action?taskdate=' + date)
		.set('Cookie', 'JSESSIONID=9109C387AB818471BAF18789674301A3;loginName=yanyj')
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
			console.log(JSON.parse(data.text).msg + count++);
			// res.send(JSON.parse(data.text).msg + count++);

		});
	}, 3000);


}).listen(8888, (error) => {
	if (error) {
		console.log('服务启动失败！请查看' + error.stack);
	}
	console.log('服务启动成功！\n请访问： http://localhost:8888......');
});

