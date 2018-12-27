import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { config } from '../config';

import DocumentRoot from './DocumentRoot';

const Index = () => (
	<Switch>
		{ config.map((props) => {
			const { path, exact, Layout, Page } = props;

			return (
				<Route exact={ exact } path={ path }>
					<DocumentRoot { ...props }>
						<Layout>
							<Page { ...props }/>
						</Layout>
					</DocumentRoot>
				</Route>
			);
		}) }
	</Switch>
);

export default Index;
