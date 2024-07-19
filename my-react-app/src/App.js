import logo from './logo.svg';
import './App.css';
import { createElement, React } from 'react';

// export const App = () => {
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<span>Current Year: {currentYear}</span>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	const currentYear = new Date().getFullYear();
	return React.createElement(
		'div',
		{
			className: 'App',
		},
		React.createElement(
			'header',
			{
				className: 'App-header',
			},
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('span', null, 'Current Year: ', currentYear),
		),
	);
};
