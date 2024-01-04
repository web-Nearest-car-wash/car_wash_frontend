import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';
import cardsCarWashesReducer from './cardsCarWashes/cardsCarWashes-slice';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
		cardsCarWashes: cardsCarWashesReducer,
	},
});

export default store;