import styles from './Price.module.css';

function Price() {
	return (
		<div className={styles.priceContainer}>
			<h2 className={styles.title}>Услуги и цены</h2>
			<ul className={styles.listItem}>
				<li className={styles.item}>
					<p className={styles.text}>Экспресс мойка</p>
					<p className={styles.price}>500</p>
				</li>
			</ul>
		</div>
	);
}

export default Price;
