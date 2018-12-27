import React from 'react';
import { string } from 'prop-types';

export const Home = ({ title }) => [
	<h1>{ title }</h1>,
	<p>Welcome to { title }</p>
];

Home.propTypes = { title: string };
