export const documentRoot = ({ content, headerInfo, isScriptEnabled }) => (`
	<!doctype html>
	<html>
		<head>
			${ headerInfo.title.toString() }
			<link rel="stylesheet" href="/stylesheets/style.css" />
		</head>
		<body>
			<div class="react-root">${ content }</div>
			${ isScriptEnabled ? '<script type="text/javascript" src="/js/bundles/bundle.js"></script>' : '' }
		</body>
	</html>
`);
