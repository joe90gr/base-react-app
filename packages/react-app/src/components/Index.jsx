import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, AboutPage, PageNotFound } from './Pages/';

const Index = () => (
	<Switch>
		<Route exact path="/" render={ HomePage } />
		<Route path="/path1" render={ AboutPage } />
		<Route path="*" render={ PageNotFound } />
	</Switch>
);

export default Index;
