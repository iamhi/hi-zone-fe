import '@assets/css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'lazysizes';

import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePageComponent from '@page-components/HomePageComponent';

const App = () => {
	const HOME_PATH = '/';

	const HomePagePopulateComponent = useMemo(() => (<HomePageComponent text="welcome" />), []);

	return (
		<BrowserRouter>
			<div className="app-layout">
				<div className="app-layout__content">
					<Routes>
						<Route path={HOME_PATH} element={HomePagePopulateComponent} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
