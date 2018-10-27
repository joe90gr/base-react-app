import React from 'react';
import ReactDom from 'react-dom/server';

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import Index from './components/Index';
import ErrorPage from './components/ErrorPage';

const app = express();
const router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(router.get('/', (req, res) => {
	res.send(`<!doctype html>\n ${ ReactDom.renderToString(<Index title="Express"/>) }`);
}));

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res, next) => {
	const { message, status, stack } = err;
	const props = { title: 'Error', message, status, stack };

	res.status(err.status || 500);
	res.send(`<!doctype html>\n ${ ReactDom.renderToStaticMarkup(<ErrorPage { ...props } />) }`);
});

export default app;
