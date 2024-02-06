import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
	loading: false,
	user: null,
	errors: null,
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
