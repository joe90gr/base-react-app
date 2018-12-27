import React from 'react';
import { array } from 'prop-types';

import { Link } from 'react-router-dom';

const PrimaryNav = ({ config }) => (
	<ul>
		{ config.map(({ link }, index) => (
			link && (
				<li key={ `link-${ index }` }>
					<Link to={ link.to }>{ link.title }</Link>
				</li>
			)
		))}
	</ul>
);

PrimaryNav.propTypes = { config: array };

export default PrimaryNav;
