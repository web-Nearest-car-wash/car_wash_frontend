import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';
import carWashesCardReducer from './cardCarWashes/cardCarWashes-slice';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
		carWashesCard: carWashesCardReducer,
	},
});

export default store;
