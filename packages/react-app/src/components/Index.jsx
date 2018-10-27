import React from 'react';

import { string } from 'prop-types';

const Index = ({ title }) => (
	<html>
		<head>
			<title>{ title }</title>
			<link rel="stylesheet" href="/stylesheets/style.css" />
		</head>
		<body>
			<h1>{ title }</h1>
			<p>Welcome to { title }</p>
		</body>
	</html>
);

Index.propTypes = { title: string };

export default Index;
