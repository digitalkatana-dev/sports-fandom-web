import {
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

export const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
	loading: false,
	firstName: '',
	lastName: '',
	email: '',
	handle: '',
	login: '',
	password: '',
	user: null,
	errors: null,
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload;
		},
		setLastName: (state, action) => {
			state.lastName = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setHandle: (state, action) => {
			state.handle = action.payload;
		},
		setLogin: (state, action) => {
			state.login = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		clearForm: (state) => {
			state.firstName = '';
			state.lastName = '';
			state.email = '';
			state.handle = '';
			state.login = '';
			state.password = '';
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const {
	setFirstName,
	setLastName,
	setEmail,
	setHandle,
	setLogin,
	setPassword,
	clearForm,
	clearErrors,
} = userSlice.actions;

export default userSlice.reducer;
