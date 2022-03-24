const path = require('path');
const fs = require('fs');

let chirpsPath = 

let arr = [
	{
		name: 'Gage',
		message: 'Hi, my name is Gage!',
	},
	{
		name: 'Branwin',
		message: 'I created an app called LogBook!',
	},
	{
		name: 'Reed',
		message: 'I like to go on adventures!',
	},
	{
		name: 'Zach',
		message: 'I am greatness!',
	},
	{
		name: 'Bailey',
		message: 'I make boba teas at Thirstea!',
	},
	{
		name: 'Cody',
		message: 'I work out!',
	},
];

fs.writeFile('../chirps')
