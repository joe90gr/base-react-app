import React from 'react';

import DocumentRoot from '../DocumentRoot';

const homePageContent = ({ staticContext: { title } }) => [
	<h1>{ title }</h1>,
	<p>Welcome to { title }</p>
];
const aboutPageContent = ({ staticContext: { title } }) => <div>{ title }</div>;
const pageNotFoundContent = () => <div>Page Not Found</div>;

export const HomePage = props => <DocumentRoot { ...props } title="Home Page" component={ homePageContent } />;
export const AboutPage = props => <DocumentRoot { ...props } title="About Page" component={ aboutPageContent } />;
export const PageNotFound = props => <DocumentRoot { ...props } title="Page Not Found" component={ pageNotFoundContent } />;
