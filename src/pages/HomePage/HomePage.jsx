import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../utils/api';

import { selectCardsCarWashes, addDataTo } from '../../store/cardsCarWashes/cardsCarWashes-slice';

import YMap from '../../components/Map/YMap';
import CardCardWash from '../../components/CardCarWash/CardCarWash';

function HomePage() {
	const dispatch = useDispatch();
	const { listCarWashes } = useSelector(selectCardsCarWashes);

	useEffect(() => {
		api.getListCarWash()
			.then((res) => {
				dispatch(addDataTo(res.results));
			})
			.catch((err) => `Ошибка при получении карточек ${err}`)
	}, [dispatch])

	return (
		<section style={{
			width: 1360, minHeight: 760, display: 'flex', justifyContent: 'space-between', columnGap: '16px', margin: '0 auto', boxSizing: 'border-box'
		}}>
			<div>
				{listCarWashes.map((card) => <CardCardWash key={card.id} card={card} />)}
			</div>
			<YMap />
		</ section>
	);
}

export default HomePage;
