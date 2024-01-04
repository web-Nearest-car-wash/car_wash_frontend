import { useEffect, useState } from 'react';

import YMap from '../../components/Map/YMap';
import CardCardWash from '../../components/CardCarWash/CardCarWash';

import api from '../../utils/api';


function HomePage() {

	const [dataCards, setDataCards] = useState([]);

	useEffect(() => {
		api.getListCarWash()
			.then((res) => {
				setDataCards(res.results)
			})
			.catch((err) => `Ошибка при получении карточек ${err}`)
	}, [])

	return (
		<section style={{
			width: 1360, minHeight: 760, display: 'flex', justifyContent: 'space-between', columnGap: '16px', margin: '0 auto', boxSizing: 'border-box'
		}}>
			<div>
				{dataCards.map((card) => <CardCardWash key={card.id} card={card} />)}
			</div>
			<YMap />
		</ section>
	);
}

export default HomePage;
