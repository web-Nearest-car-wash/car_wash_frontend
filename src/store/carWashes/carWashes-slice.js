import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	carWashes: {},
	listCarWashes: [],
	currentCarWash: {},
	loading: true,
	error: null,
};

export const sliceName = 'carWashes';

export const fetchListCarWash = createAsyncThunk(
	`${sliceName}/fetchListCarWash`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getListCarWash();
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const fetchListFilteredCarWashes = createAsyncThunk(
	`${sliceName}/fetchListFilteredCarWashes`,
	async (querry, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getListFilteredCarWash(querry);
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

const carWashesSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setCurrentCarWash: (state, action) => {
			state.currentCarWash = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchListCarWash.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchListCarWash.fulfilled, (state, action) => {
				state.carWashes = action.payload;
				state.listCarWashes = action.payload.results;
				state.loading = false;
			})
			.addCase(fetchListCarWash.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchListFilteredCarWashes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchListFilteredCarWashes.fulfilled, (state, action) => {
				state.listCarWashes = action.payload.results;
				state.loading = false;
			})
			.addCase(fetchListFilteredCarWashes.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectCarWashes = (state) => state[sliceName];
export const { setCurrentCarWash } = carWashesSlice.actions;
export default carWashesSlice.reducer;
