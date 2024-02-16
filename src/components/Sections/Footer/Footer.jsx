import styles from './Footer.module.css';
import logo from '../../../assets/logo.svg';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<img alt="logo" src={logo} className={styles.logo} />
				<p className={styles.copyright}>&copy; 2023 Все права защищены</p>
			</div>
			<ul className={styles.contacts}>
				<li className={styles.contact}>Москва, ул.Большая полянка, 29с1</li>
				<li className={styles.contact}>Тел.: 8 (495) 667 3934</li>
				<li className={styles.contact}>Email: autowash@close.ru</li>
			</ul>
		</footer>
	);
}

export default Footer;
