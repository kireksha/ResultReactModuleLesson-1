// Декларативный
import logo from './logo.svg';
// Декларативный
import './App.css';

// Декларативный
export const App = () => {
	// Декларативный
	const currentYear = new Date().getFullYear();

	return (
		/*Императивный*/
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>Current Year: {currentYear}</span>
			</header>
		</div>
	);
};
