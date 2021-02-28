import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.css';
export const Navbar: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<GiHamburgerMenu size={'1.5rem'} />
			<p className={styles['title-nav']}>Website todo</p>
		</nav>
	);
};
