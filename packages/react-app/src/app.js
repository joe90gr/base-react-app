import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import Routes from './components/Routes';
import ErrorPage from './components/ErrorPage';
import { documentRoot } from './documentRoot';

import { Helmet } from 'react-helmet';

const app = express();
const router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(router.get('*', (req, res) => {
	const content = ReactDom.renderToString(
		<StaticRouter location = { req.url } context={{}}>
			<Routes/>
		</StaticRouter>
	);

	const headerInfo = Helmet.renderStatic();

	res.send(documentRoot({ content, headerInfo }));
}));

app.use((req, res, next) => next(createError(404)));

// The function signiture line, eslint is turned off due to needed unused "next" arg
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	const { message, status, stack } = err;
	const props = { title: 'Error', message, status, stack };

	res.status(err.status || 500);
	res.send(`<!doctype html>\n ${ ReactDom.renderToStaticMarkup(<ErrorPage { ...props } />) }`);
});

export default app;
