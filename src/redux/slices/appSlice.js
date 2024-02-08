import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	drawerOpen: false,
	sport: null,
	spread: false,
	nflFav: null,
	nflFavKey: null,
	nbaFav: null,
	nbaFavKey: null,
	mlbFav: null,
	mlbFavKey: null,
	nhlFav: null,
	nhlFavKey: null,
	news: null,
	players: null,
	stats: null,
	standings: null,
	errors: null,
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setDrawerOpen: (state, action) => {
			state.drawerOpen = action.payload;
		},
		setSport: (state, action) => {
			state.sport = action.payload;
		},
		toggleSpread: (state, action) => {
			state.spread = action.payload;
		},
	},
});

export const { setDrawerOpen } = appSlice.actions;

export default appSlice.reducer;
