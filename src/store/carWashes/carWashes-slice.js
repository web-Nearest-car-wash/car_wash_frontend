import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	test: '',
};

export const sliceName = 'carWashes';

const carWashesSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		testAction: (state, action) => {
			state.test = action.payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase();
	// },
});

export const selectCarWashes = (state) => state[sliceName];
export const { testAction } = carWashesSlice.actions;
export default carWashesSlice.reducer;
