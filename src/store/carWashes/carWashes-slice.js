import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	carWashes: {},
	listCarWashes: [],
	currentCarWash: {},
	currentCarWashOnMap: {},
	loading: true,
	error: null,
};

export const sliceName = 'carWashes';

export const fetchListCarWash = createAsyncThunk(
	`${sliceName}/fetchListCarWash`,
	async ({ latitude, longitude }, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getListCarWash({ latitude, longitude });
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const fetchCarWashesBySearch = createAsyncThunk(
	`${sliceName}/fetchCarWashesBySearch`,
	async (searchValue, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.searchCarWashes(searchValue);
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
		setCurrentCarWashOnMap: (state, action) => {
			state.currentCarWashOnMap = action.payload;
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
			});

		builder
			.addCase(fetchCarWashesBySearch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCarWashesBySearch.fulfilled, (state, action) => {
				state.carWashes = action.payload;
				state.listCarWashes = action.payload.results;
				state.loading = false;
			})
			.addCase(fetchCarWashesBySearch.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectCarWashes = (state) => state[sliceName];
export const { setCurrentCarWash, setCurrentCarWashOnMap } =
	carWashesSlice.actions;
export default carWashesSlice.reducer;
