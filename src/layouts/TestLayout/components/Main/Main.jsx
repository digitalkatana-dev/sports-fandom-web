import { Box } from '@mui/material';
import DrawerSpacer from '../../../../components/DrawerSpacer';
import './main.scss';

const Main = ({ children }) => {
	return (
		<Box
			component='main'
			sx={{
				height: '100vh',
				flexGrow: 1,
				p: 3,
			}}
		>
			<DrawerSpacer />
			<div id='content-container'>{children}</div>
		</Box>
	);
};

export default Main;
