import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';

import Modal from '../Modals/Modal/Modal';
import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
// import { modals } from '../../utils/modals';

import { closeModal, selectModal } from '../../store/modal/modal-slice';

function App() {
	const dispatch = useDispatch();
	const { isModalOpen } = useSelector(selectModal);

	return (
		<BrowserRouter>
			<Header />
			<main id="main" style={{ backgroundColor: '#ECECEC' }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/carwashes/:id" element={<AboutPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
			<Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())} />
		</BrowserRouter>
	);
}

export default App;
