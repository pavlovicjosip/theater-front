import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Movies from './components/Movies';

export default () => {
	return (
		<div>
			<StylesProvider>
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
