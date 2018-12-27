import React from 'react';
import { object } from 'prop-types';

import { config } from '../../config';
import PrimaryNav from '../PrimaryNav';

export const LeftLayout = props => (
	<div className="layout-left">
		<PrimaryNav config={ config } />
		{ props.children }
	</div>
);

LeftLayout.propTypes = { children: object };
