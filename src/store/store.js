import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';
import filtersReducer from './filters/filters-slice';
import carWashesCardReducer from './cardCarWashes/cardCarWashes-slice';
import modalReducer from './modal/modal-slice';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
		filters: filtersReducer,
		carWashesCard: carWashesCardReducer,
		modal: modalReducer,
	},
});

export default store;
