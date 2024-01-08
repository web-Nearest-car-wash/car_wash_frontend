import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<YMaps
		query={{
			lang: 'ru_RU',
			apikey: process.env.REACT_APP_API_KEY,
		}}
	>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</YMaps>
);

reportWebVitals();
