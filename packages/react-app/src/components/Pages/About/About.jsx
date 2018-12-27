import React from 'react';
import { string } from 'prop-types';

import { Helmet } from 'react-helmet';

export const About = ({ title }) => (
	<div>
		<Helmet>
			<title>About</title>
		</Helmet>
		<h1>{ title }</h1>
	</div>
);

About.propTypes = { title: string };
