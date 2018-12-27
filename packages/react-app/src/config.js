import { LeftLayout, FullScreenLayout } from './components/Layout/';
import { Home, About, PageNotFound } from './components/Pages/';

export const config = [
	{
		title: 'Home Page',
		path: '/',
		link: {
			title: 'Home',
			to: '/'
		},
		Layout: LeftLayout,
		Page: Home,
		exact: true
	},
	{
		title: 'About Page',
		path: '/about',
		link: {
			title: 'About',
			to: '/about'
		},
		Layout: LeftLayout,
		Page: About
	},
	{
		title: 'Page Not Found',
		path: '*',
		Layout: FullScreenLayout,
		Page: PageNotFound
	}
];
