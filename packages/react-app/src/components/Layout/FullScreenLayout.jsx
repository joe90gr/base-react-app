import React from 'react';
import { object } from 'prop-types';

export const FullScreenLayout = props => (
	<div className="layout-fullscreen">
		{ props.children }
	</div>
);

FullScreenLayout.propTypes = { children: object };
