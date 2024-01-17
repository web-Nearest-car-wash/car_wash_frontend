import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';
import filtersReducer from './filters/filters-slice';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
		filters: filtersReducer,
	},
});

export default store;
