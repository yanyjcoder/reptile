import fs from 'fs';



let save = (data) => {
	fs.writeFile('public/json.json', JSON.stringify(data), (error) => {
		if (error) {
			console.log('写入失败，具体请查看' + error)
		} else  {
			console.log('写入成功！');
		};
	});

};

export default save;