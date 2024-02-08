import { Box } from '@mui/material';
import './main.scss';
import DrawerHeader from '../../../../components/DrawerHeader';

const Main = ({ children }) => {
	return (
		<Box
			component='main'
			sx={{
				height: '100vh',
				flexGrow: 1,
				p: 3,
				backgroundColor: 'var(--primary)',
			}}
		>
			<DrawerHeader />
			{children}
		</Box>
	);
};

export default Main;
