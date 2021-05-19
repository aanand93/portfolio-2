import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Navbar } from './Components';
import Home from './Pages/HomePage/Home';
import Projects from './Pages/ProjectPage/Projects';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';

function App() {
	return (
		<div className='App'>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/contact' exact component={Contact} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
