import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isModalOpen: true,
	currentModal: '',
};

export const sliceName = 'modal';

const modalSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isModalOpen = true;
			state.currentModal = action.payload;
		},
		closeModal: (state) => {
			state.isModalOpen = false;
			state.currentModal = '';
		},
	},
});

export const selectModal = (state) => state[sliceName];
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
