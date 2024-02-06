import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const baseballAdapter = createEntityAdapter();
const initialState = baseballAdapter.getInitialState({
	loading: false,
	mlbTeams: null,
	mlbTeam: null,
	mlbFav: null,
	errors: null,
});

export const baseballSlice = createSlice({
	name: 'mlb',
	initialState,
	reducers: {
		setMLBFav: (state, action) => {
			state.mlbFav = action.payload;
		},
	},
});

export const { setMLBFav } = baseballSlice.actions;

export default baseballSlice.reducer;
