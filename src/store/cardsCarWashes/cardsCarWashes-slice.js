import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	listCarWashes: [],
};

export const sliceName = 'cardsCarWashes';

const carWashesSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		addDataTo: (state, action) => {
			state.listCarWashes = action.payload;
		},
	},
});

export const selectCardsCarWashes = (state) => state[sliceName];
export const { addDataTo } = carWashesSlice.actions;
export default carWashesSlice.reducer;