import React from 'react';

import { Link } from 'react-router-dom';

export const PageNotFound = () => (
	<div>
		<h1>Page Not Found</h1>
		<Link className="button-link text-center center-center" to="/">Home</Link>
	</div>
);
