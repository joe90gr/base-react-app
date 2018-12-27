import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { config } from '../config';

const Routes = () => (
	<Switch>
		{ config.map((props) => {
			const { path, exact, Layout, Page } = props;

			return (
				<Route exact={ exact } path={ path }>
					<Layout>
						<Page { ...props }/>
					</Layout>
				</Route>
			);
		}) }
	</Switch>
);

export default Routes;
