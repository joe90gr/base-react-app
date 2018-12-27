import React from 'react';
import { string } from 'prop-types';

export const About = ({ title }) => (
	<div>
		<h1>{ title }</h1>
	</div>
);

About.propTypes = { title: string };
