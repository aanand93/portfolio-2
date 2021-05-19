import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Components';

function App() {
	return (
		<div className='App'>
			<Router>
				<GlobalStyle />
				<Navbar />
			</Router>
		</div>
	);
}

export default App;
