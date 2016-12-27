import express from 'express';
import superagent from 'superagent';

import parse from './src/cheerio_parse';
import save from './src/json_save';

let app = express();
let url = 'https://cnodejs.org';

app.get('/search', (req, res) => {
	superagent.get(url)
	.end((error, data) => {
		if(error) {
			return console.error(error);
		}
		let items = parse(data.text, url);

		save(items);

		res.send(items);
	});
}).listen(8888, (error) => {
	if (error) {
		console.log('服务启动失败！请查看' + error.stack);
	}
	console.log('服务启动成功！\n请访问： http://localhost:8888......');
});

