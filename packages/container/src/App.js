import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MoviesApp from './components/MoviesApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});
export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header />
					<MoviesApp />
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
