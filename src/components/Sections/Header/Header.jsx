import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';

function Header() {
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				{location.pathname === '/' ? (
					<button className={styles.button}>Показать мойку рядом</button>
				) : (
					<div className={styles.buttonPlaceholder} />
				)}
				<a href="/">
					<img className={styles.logo} alt="logo" src={logo} />
				</a>
				<div className={styles.location}>
					<p className={styles.city}>Москва</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
