import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import './main.scss';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Main = ({ children }) => {
	return (
		<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
			<DrawerHeader />
			{children}
		</Box>
	);
};

export default Main;
