import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCarWashCard } from '../../store/cardCarWashes/cardCarWashes-slice';

function AboutPage() {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCarWashCard(id));
	}, [dispatch, id]);

	return <section>About Page</section>;
}

export default AboutPage;
