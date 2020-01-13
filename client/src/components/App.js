import { Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Header from './Header';
import Movies from '../pages/Movies';

const App = () => (
	<Fragment>
		<Header />
		<Switch>
			<Route exact path="/" component={Movies} />
		</Switch>
	</Fragment>
);

export default App;
