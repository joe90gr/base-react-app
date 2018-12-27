import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Routes from './components/Routes';

ReactDOM.render(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>, document.getElementsByClassName('react-root')[0]
);
