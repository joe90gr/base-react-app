import React from 'react';
import { string } from 'prop-types';

import { Helmet } from 'react-helmet';

export const Home = ({ title }) => [
	<Helmet>
		<title>Home Page</title>
	</Helmet>,
	<h1>{ title }</h1>,
	<p>Welcome to { title }</p>
];

Home.propTypes = { title: string };
