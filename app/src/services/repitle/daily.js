import superagent from 'superagent';

import {format} from '../common';

//填写日志
const daily = () => {
	let date = format(new Date(), 'yyyy-MM-dd');
	let result = '';
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
		result = JSON.parse(data.text).msg;
	});
	console.log(result);
	return result;
};

export default daily;