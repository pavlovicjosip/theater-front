import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Movies from './components/Movies';

const generateClassName = createGenerateClassName({
	productionPrefix: 'mo',
});

export default () => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/movies" component={Movies} />
						<Route path="/" component={Movies} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
};
