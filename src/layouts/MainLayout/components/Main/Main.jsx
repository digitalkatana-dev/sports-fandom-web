import { Box } from '@mui/material';
import './main.scss';
import DrawerSpacer from '../../../../components/DrawerSpacer';

const Main = ({ children }) => {
	return (
		<Box
			component='main'
			sx={{
				height: '100vh',
				flexGrow: 1,
				p: 3,
				backgroundColor: 'var(--primary)',
				border: '2px solid var(--highlight)',
			}}
		>
			<DrawerSpacer />
			{children}
		</Box>
	);
};

export default Main;
