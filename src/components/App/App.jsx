import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';

import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
import {
	selectCarWashes,
	testAction,
} from '../../store/carWashes/carWashes-slice';

function App() {
	const dispatch = useDispatch();
	const { test } = useSelector(selectCarWashes);

	// eslint-disable-next-line no-console
	console.log(test);

	useEffect(() => {
		dispatch(testAction('hello redux'));
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />
			<main id="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
