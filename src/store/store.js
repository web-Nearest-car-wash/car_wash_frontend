import { configureStore } from '@reduxjs/toolkit';
import carWashesReducer from './carWashes/carWashes-slice';
import filtersReducer from './filters/filters-slice';
import carWashesCardReducer from './cardCarWashes/cardCarWashes-slice';
import popupReducer from './popupReviews/reducer';

const store = configureStore({
	reducer: {
		carWashes: carWashesReducer,
		filters: filtersReducer,
		carWashesCard: carWashesCardReducer,
		popupReviews: popupReducer,
	},
});

export default store;
