import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCarWashCard } from '../../store/cardCarWashes/cardCarWashes-slice';
import HeaderCarWash from '../../components/HeaderCarWash/HeaderCarWash';

function AboutPage() {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCarWashCard(id));
	}, [dispatch, id]);

	return (
		<section>
			About Page
			<HeaderCarWash />
		</section>
	);
}

export default AboutPage;
