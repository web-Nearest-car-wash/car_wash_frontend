import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	listServices: [],
	listTypes: [],
	opened: false,
	loading: true,
	error: null,
};

export const sliceName = 'filters';

export const fetchListServices = createAsyncThunk(
	`${sliceName}/fetchListServices`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getListServices();
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const fetchListTypes = createAsyncThunk(
	`${sliceName}/fetchListTypes`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getListTypes();
			return fulfillWithValue({ ...data });
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

const filtersSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		handleOpen: (state, action) => {
			state.opened = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchListServices.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchListServices.fulfilled, (state, action) => {
				state.listServices = action.payload.results;
				state.loading = false;
			})
			.addCase(fetchListServices.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchListTypes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchListTypes.fulfilled, (state, action) => {
				state.listTypes = action.payload.results;
				state.loading = false;
			})
			.addCase(fetchListTypes.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectFilters = (state) => state[sliceName];
export const { handleOpen } = filtersSlice.actions;
export default filtersSlice.reducer;
