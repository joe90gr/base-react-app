import React from 'react';

const DocumentRoot = props => [
	<head>
		<title>{ props.title }</title>
		<link rel="stylesheet" href="/stylesheets/style.css" />
	</head>,
	<body>
		{ props.children }
		<script type="text/javascript" src="/js/bundles/bundle.js" />
	</body>
];

export default DocumentRoot;
