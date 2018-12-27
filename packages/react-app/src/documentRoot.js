export const documentRoot = ({ content, headerInfo }) => (`
	<!doctype html>
	<html>
		<head>
			${ headerInfo.title.toString() }
			<link rel="stylesheet" href="/stylesheets/style.css" />
		</head>
		<body>
			<div class="react-root">${ content }</div>
			<script type="text/javascript" src="/js/bundles/bundle.js"></script>
		</body>
	</html>
`);
