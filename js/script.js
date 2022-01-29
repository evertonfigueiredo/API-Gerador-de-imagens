const BASE_URL = 'https://aws.random.cat/meow';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
        console.log(json.file);
		return json.file;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);