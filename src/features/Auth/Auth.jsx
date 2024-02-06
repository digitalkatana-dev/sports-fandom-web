import { FormControl, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setFirstName,
	setLastName,
	setEmail,
	setHandle,
	setLogin,
	setPassword,
	clearForm,
	clearErrors,
} from '../../redux/slices/userSlice';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './auth.scss';
import TouchableOpacity from '../../components/TouchableOpacity';

const Auth = () => {
	const { firstName, lastName, email, handle, login, password, errors } =
		useSelector((state) => state.user);
	const [authType, setAuthType] = useState('login');
	const formatted = authType.charAt(0).toUpperCase() + authType.slice(1);
	const dispatch = useDispatch();

	const handleToggle = () => {
		setAuthType(authType === 'login' ? 'register' : 'login');
		dispatch(clearForm());
		dispatch(clearErrors());
	};

	const handleFocus = () => {
		dispatch(clearErrors());
	};

	const handleChange = (input, value) => {
		const actionMap = {
			toggle: setAuthType,
			first: setFirstName,
			last: setLastName,
			email: setEmail,
			handle: setHandle,
			login: setLogin,
			password: setPassword,
		};

		const action = actionMap[input];

		if (action) {
			dispatch(action(value));
		}
	};

	return (
		<div id='auth'>
			<Paper className='surface' elevation={12}>
				<div className='container'>
					<TouchableOpacity onClick={handleToggle}>
						<h2>{formatted}</h2>
						{authType === 'login' ? (
							<LoginIcon className='icon' fontSize='large' />
						) : (
							<PersonAddIcon className='icon' fontSize='large' />
						)}
					</TouchableOpacity>
				</div>
				<form action=''>
					{authType === 'register' && (
						<>
							<FormControl variant='standard'>
								<TextField
									className='input'
									label='First Name'
									size='small'
									value={firstName}
									onFocus={handleFocus}
									onChange={(e) => handleChange('first', e.target.value)}
								/>
								{errors?.firstName && (
									<h6 className='error'>{errors.firstName}</h6>
								)}
							</FormControl>
							<FormControl variant='standard'>
								<TextField
									className='input'
									label='Last Name'
									size='small'
									value={lastName}
									onFocus={handleFocus}
									onChange={(e) => handleChange('last', e.target.value)}
								/>
								{errors?.lastName && (
									<h6 className='error'>{errors.lastName}</h6>
								)}
							</FormControl>
							<FormControl variant='standard'>
								<TextField
									className='input'
									label='Email'
									size='small'
									value={email}
									onFocus={handleFocus}
									onChange={(e) => handleChange('email', e.target.value)}
								/>
								{errors?.eamil && <h6 className='error'>{errors?.eamil}</h6>}
							</FormControl>
							<FormControl variant='standard'>
								<TextField
									className='input'
									label='Handle'
									size='small'
									value={handle}
									onFocus={handleFocus}
									onChange={(e) => handleChange('handle', e.target.value)}
								/>
								{errors?.handle && <h6 className='error'>{errors?.handle}</h6>}
							</FormControl>
						</>
					)}
					{authType === 'login' && (
						<FormControl variant='standard'>
							<TextField
								className='input'
								label='Login'
								size='small'
								value={login}
								onFocus={handleFocus}
								onChange={(e) => handleChange('login', e.target.value)}
							/>
							{errors?.login && <h6 className='error'>{errors?.login}</h6>}
						</FormControl>
					)}
					<FormControl variant='standard'>
						<TextField
							className='input'
							type='password'
							label='Password'
							size='small'
							value={password}
							onFocus={handleFocus}
							onChange={(e) => handleChange('password', e.target.value)}
						/>
						{errors?.password && <h6 className='error'>{errors?.password}</h6>}
					</FormControl>
					<button>Submit</button>
				</form>
			</Paper>
		</div>
	);
};

export default Auth;
