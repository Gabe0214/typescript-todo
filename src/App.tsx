import React from 'react';

import style from './App.module.css';
import Main from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';

function App() {
	const className: string = style.bg;
	return (
		<div>
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
