const path = require('path');
const rp = require('request-promise');
const fs = require('fs');

const popularArticlesJSON = path.join(__dirname, 'popular-articles.json');

rp('http://www.reddit.com/r/popular.json')
	.then(jsonData => JSON.parse(jsonData))
	.then(articles => {
		let newObjArr = [];

		articles.data.children.forEach(article => {
			const articleObject = {
				subreddit: article.data.subreddit,
				title: article.data.title,
				author: article.data.author,
				url: article.data.url,
			};
            newObjArr.push(articleObject);
		});

        const popularArticlesObjArr = JSON.stringify(newObjArr);
        fs.writeFileSync(popularArticlesJSON, popularArticlesObjArr);
	})
	.catch(err => console.log(err));

// console.log(JSON.stringify(redditData))
