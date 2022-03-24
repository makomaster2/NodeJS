const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

rp('http://www.reddit.com/r/popular.json')
	.then(jsonData => JSON.parse(jsonData))
	.then(articles => {
		articles.data.children.forEach(article => {
			if (
				path.extname(article.data.url) == '.jpg' ||
				path.extname(article.data.url) == '.gif' ||
				path.extname(article.data.url) == '.png'
			) {
                rp(article.data.url, { encoding: 'base64' })
                    .then(img => {
                        const imgPath = `./downloads/${article.data.id}${path.extname(article.data.url)}`;
                        fs.writeFileSync(imgPath, img, { encoding: 'base64' });
                    })
                    .catch(err => console.log(err));
			}
		});
	});
