import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import authApi from '../../api/authApi';

export const userRegister = createAsyncThunk(
	'user/register',
	async (data, { rejectWithValue }) => {
		try {
			const res = await authApi.post('/users/register', data);
			const { token, userData } = res.data;
			if (token) {
				localStorage.setItem('token', token);
			}
			return userData;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const userLogin = createAsyncThunk(
	'user/login',
	async (data, { rejectWithValue }) => {
		try {
			const res = await authApi.post('/users/login', data);
			const { token, userData } = res.data;
			if (token) {
				localStorage.setItem('token', token);
			}
			return userData;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

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
		userLogout: (state) => {
			state.loading = false;
			state.firstName = '';
			state.lastName = '';
			state.email = '';
			state.handle = '';
			state.login = '';
			state.password = '';
			state.user = null;
			state.errors = null;
			localStorage.removeItem('token');
			userAdapter.removeAll(state);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userRegister.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(userRegister.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(userLogin.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(userLogin.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
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
	userLogout,
} = userSlice.actions;

export default userSlice.reducer;
