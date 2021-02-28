import React from 'react';

import style from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
	const className: string = style.bg;
	return (
		<div>
			<Navbar />
		</div>
	);
}

export default App;
