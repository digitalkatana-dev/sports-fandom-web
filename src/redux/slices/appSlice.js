import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	drawerOpen: false,
	deleteDialog: false,
	deleteData: null,
	contentDialog: false,
	errors: null,
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setDrawerOpen: (state, action) => {
			state.drawerOpen = action.payload;
		},
	},
});

export const { setDrawerOpen } = appSlice.actions;

export default appSlice.reducer;
