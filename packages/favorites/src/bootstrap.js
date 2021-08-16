import faker from 'faker';

const mount = (el) => {
	const favoriteText = `<div>You have ${faker.datatype.number()} favorite movies</div>`;

	el.innerHTML = favoriteText;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-favorites');

	if (el) {
		mount(el);
	}
}

export { mount };
