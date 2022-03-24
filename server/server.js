const path = require('path');
const fs = require('fs');

const chirpsJSON = path.join(__dirname, 'chirps.json');

const chirpsArr = [
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
		message: 'I am the greatness!',
	},
	{
		name: 'Bailey',
		message: 'I make boba teas at Thirstea!',
	},
	{
		name: 'Cody',
		message: 'Do you even gym, bro?!',
	},
];

const chirpsData = JSON.stringify(chirpsArr);

fs.writeFileSync(chirpsJSON, chirpsData);

// console.info("<------Chirps Array------>");
// console.log(chirpsArr);
// console.info("<------Chirps after JSON.stringify------>");
// console.log(chirpData);

const chirpsFileData = fs.readFileSync(chirpsJSON);

console.log(JSON.parse(chirpsFileData));
