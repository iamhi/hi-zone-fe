import '@assets/css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'lazysizes';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePageComponent from '@page-components/HomePageComponent';

const App = () => (
	<BrowserRouter>
		<div className="app-layout">
			<div className="app-layout__content">
				<HomePageComponent />
			</div>
		</div>
	</BrowserRouter>
);

export default App;
