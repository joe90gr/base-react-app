import React from 'react';

import { string } from 'prop-types';

import { Helmet } from 'react-helmet';

export const ErrorPage = ({ message, status, stack }) => [
	<Helmet><title>Error</title></Helmet>,
	<h1>{ message }</h1>,
	<h2>{ status }</h2>,
	<pre>{ stack }</pre>
];

ErrorPage.propTypes = {
	message: string,
	status: string,
	stack: string
};

