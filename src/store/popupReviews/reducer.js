const initialState = {
	isOpen: false,
};

// eslint-disable-next-line default-param-last
const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_POPUP':
			return {
				...state,
				isOpen: true,
			};
		case 'CLOSE_POPUP':
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
};

export default popupReducer;
