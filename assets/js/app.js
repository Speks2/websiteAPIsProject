const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7534531646msha5f167de56e9e8bp144389jsnc55df6d760a0',
		'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}