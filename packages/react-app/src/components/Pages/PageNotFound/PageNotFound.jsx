import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
	<div>
		<Helmet>
			<title>Page Not Found</title>
		</Helmet>
		<h1 className="text-center">Page Not Found</h1>
		<Link className="button-link text-center center-center" to="/">Home</Link>
	</div>
);
