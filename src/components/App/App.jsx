import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';

import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
import Price from '../Price/Price';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main id="main" style={{ backgroundColor: '#ECECEC' }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/car-wash/:id" element={<Price />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
