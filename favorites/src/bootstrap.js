import faker from 'faker';

const favoriteText = `<div>You have ${faker.datatype.number()} favorite movies</div>`;

document.querySelector('#favoriteList').innerHTML = favoriteText;
