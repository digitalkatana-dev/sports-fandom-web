import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const basketballAdapter = createEntityAdapter();
const initialState = basketballAdapter.getInitialState({
	loading: false,
	nbaTeams: null,
	nbaTeam: null,
	nbaFav: null,
	errors: null,
});

export const basketballSlice = createSlice({
	name: 'nba',
	initialState,
	reducers: {
		setNBAFav: (state, action) => {
			state.nbaFav = action.payload;
		},
	},
});

export const { setNBAFav } = basketballSlice.actions;

export default basketballSlice.reducer;
