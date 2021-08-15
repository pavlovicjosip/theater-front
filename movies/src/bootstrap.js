import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
	ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_movies-dev-root');
	if (devRoot) {
		mount(devRoot);
	}
}

export { mount };

//OLD CODE FOR PLAIN JS MICRO FRONTEND
// import faker from 'faker';

// const mount = (el) => {
// 	let vehicles = '';

// 	for (let i = 0; i <= 5; i++) {
// 		const vehicleName = faker.vehicle.vehicle();
// 		vehicles += `<div>${vehicleName}</div>`;
// 	}

// 	el.innerHTML = vehicles;
// };

// if (process.env.NODE_ENV === 'development') {
// 	const el = document.querySelector('#dev-vehicles');

// 	if (el) {
// 		mount(el);
// 	}
// }
