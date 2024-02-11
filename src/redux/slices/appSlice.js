import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	isMobile: false,
	drawerOpen: false,
	selectedSport: null,
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
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
		setDrawerOpen: (state, action) => {
			state.drawerOpen = action.payload;
		},
		setSelectedSport: (state, action) => {
			state.selectedSport = action.payload;
		},
		toggleSpread: (state, action) => {
			state.spread = action.payload;
		},
		setNFLFav: (state, action) => {
			state.nflFav = action.payload.split(', ')[0];
			state.nflFavKey = action.payload.split(', ')[1];
		},
		setNBAFav: (state, action) => {
			state.nbaFav = action.payload.split(', ')[0];
			state.nbaFavKey = action.payload.split(', ')[1];
		},
		setMLBFav: (state, action) => {
			state.mlbFav = action.payload.split(', ')[0];
			state.mlbFavKey = action.payload.split(', ')[1];
		},
		setNHLFav: (state, action) => {
			state.nhlFav = action.payload.split(', ')[0];
			state.nhlFavKey = action.payload.split(', ')[1];
		},
	},
});

export const {
	setIsMobile,
	setDrawerOpen,
	setSelectedSport,
	toggleSpread,
	setNFLFav,
	setNBAFav,
	setMLBFav,
	setNHLFav,
} = appSlice.actions;

export default appSlice.reducer;
