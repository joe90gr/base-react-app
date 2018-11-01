import React from 'react';

import { Link } from 'react-router-dom';

const DocumentRoot = (props) => {
	props.staticContext.title = props.title;

	return (
		<html>
			<head>
				<title>{ props.title }</title>
				<link rel="stylesheet" href="/stylesheets/style.css" />
			</head>
			<body>
				<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/path1">PATH1</Link></li>
					<li><Link to="/gdf">ERR</Link></li>
				</ul>
				{ <props.component { ...props }/> }
			</body>
		</html>
	);
};

export default DocumentRoot;
