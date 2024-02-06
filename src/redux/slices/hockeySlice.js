import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const hockeyAdapter = createEntityAdapter();
const initialState = hockeyAdapter.getInitialState({
	loading: false,
	nhlTeams: null,
	nhlTeam: null,
	nhlFav: null,
	errors: null,
});

export const hockeySlice = createSlice({
	name: 'nhl',
	initialState,
	reducers: {
		setNHLFav: (state, action) => {
			state.nhlFav = action.payload;
		},
	},
});

export const { setNHLFav } = hockeySlice.actions;

export default hockeySlice.reducer;
