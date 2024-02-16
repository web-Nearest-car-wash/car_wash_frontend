import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import CarWashPage from '../../pages/CarWashPage/CarWashPage';

import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main id="main" style={{ backgroundColor: '#ECECEC' }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/carwashes/:id" element={<CarWashPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
