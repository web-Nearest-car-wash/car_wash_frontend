import PropTypes from 'prop-types';
import styles from './Price.module.css';

function Price({ cardsService }) {
	return (
		<div className={styles.priceContainer}>
			<h2 className={styles.title}>Услуги и цены</h2>
			<ul className={styles.listItem}>
				{cardsService.map((serv, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<li key={index} className={styles.item}>
						<p className={styles.text}>{serv.name}</p>
						<p className={styles.price}>{serv.price}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

Price.propTypes = {
	cardsService: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		})
	).isRequired,
};

export default Price;
