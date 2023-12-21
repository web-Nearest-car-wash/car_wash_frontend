import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';

function Header() {
	return (
		<header className={styles.header}>
			<button className={styles.button}>Показать мойку рядом</button>
			<img className={styles.logo} alt="logo" src={logo} />
			<div className={styles.location}>
				<p className={styles.city}>Москва</p>
			</div>
		</header>
	);
}

export default Header;
