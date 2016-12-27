import cheerio from 'cheerio';

let parse = (html=[], url = '') => {
	let $ = cheerio.load(html);
	let items = [];
	$('#topic_list .topic_title').each(function (idx, element) {
		let $element = $(element);
		items.push({
			title: $element.attr('title'),
			href: url + $element.attr('href')
		});
	});

	console.log('解析结束');
	return items;
};

export default parse;