import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Index from './components/Index';

ReactDOM.render(
	<BrowserRouter>
		<Index/>
	</BrowserRouter>, document.getElementsByTagName('html')[0]
);
