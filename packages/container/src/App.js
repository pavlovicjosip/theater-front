import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MoviesApp from './components/MoviesApp';

export default () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<MoviesApp />
			</div>
		</BrowserRouter>
	);
};
