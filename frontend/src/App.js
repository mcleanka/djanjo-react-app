import React from 'react';
import Routes from './utils/Routes';

import {
	BrowserRouter as Router,
	Link,
	Redirect,
	Switch,
	Route
} from "react-router-dom";
import Header from './components/Header';

function App() {
	return <Router>
		<>
			<Header />
			<Switch>
				{
					Routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))
				}
			</Switch>
		</>
	</Router>;
}

export default App
