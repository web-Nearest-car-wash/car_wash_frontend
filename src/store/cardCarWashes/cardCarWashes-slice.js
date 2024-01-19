import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	carWashesCard: {},
	loading: true,
	error: null,
};

export const sliceName = 'carWashesCard';

export const fetchCarWashCard = createAsyncThunk(
	`${sliceName}/fetchCarWashCard`,
	async (id, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getCarWashCard(id);
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

const carWashesCardReducer = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setCurrentCarWash: (state, action) => {
			state.currentCarWash = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCarWashCard.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCarWashCard.fulfilled, (state, action) => {
				state.carWashesCard = action.payload;
				state.loading = false;
			})
			.addCase(fetchCarWashCard.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectcarWashesCard = (state) => state[sliceName];
export default carWashesCardReducer.reducer;
