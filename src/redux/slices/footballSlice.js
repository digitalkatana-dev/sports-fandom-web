import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const footballAdapter = createEntityAdapter();
const initialState = footballAdapter.getInitialState({
	loading: false,
	nflTeams: null,
	nflTeam: null,
	nflFav: null,
	errors: null,
});

export const footballSlice = createSlice({
	name: 'nfl',
	initialState,
	reducers: {
		setNFLFav: (state, action) => {
			state.nflFav = action.payload;
		},
	},
});

export const { setNFLFav } = footballSlice.actions;

export default footballSlice.reducer;
