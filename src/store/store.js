import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
	},
});

export default store;
