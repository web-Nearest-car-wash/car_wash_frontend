import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Price.module.css';
import api from '../../utils/api';

function Price() {
	const [cardsService, setCardsService] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		api
			.getCarWash(id)
			.then((data) => {
				setCardsService(data.services);
			})
			.catch((err) => alert(err));
	}, [id]);

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

export default Price;
