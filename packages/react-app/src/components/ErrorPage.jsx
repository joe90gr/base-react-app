import React from 'react';

import { string } from 'prop-types';

const ErrorPage = ({ title, message, status, stack }) => (
	<html>
		<head>
			<title>{ title }</title>
			<link rel="stylesheet" href="/stylesheets/style.css" />
		</head>
		<body>
			<h1>{ message }</h1>
			<h2>{ status }</h2>
			<pre>{ stack }</pre>
		</body>
	</html>
);

ErrorPage.propTypes = {
	title: string,
	message: string,
	status: string,
	stack: string
};

export default ErrorPage;
