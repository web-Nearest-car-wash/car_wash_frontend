/* eslint-disable default-param-last */
const initialState = {
	rating: null,
};

export const ratingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_RATING':
			return {
				...state,
				rating: action.payload,
			};
		default:
			return state;
	}
};
