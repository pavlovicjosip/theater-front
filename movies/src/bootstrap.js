import faker from 'faker';

let vehicles = '';

for (let i = 0; i <= 5; i++) {
	const vehicleName = faker.vehicle.vehicle();
	vehicles += `<div>${vehicleName}</div>`;
}

document.querySelector('#vehicles').innerHTML = vehicles;
