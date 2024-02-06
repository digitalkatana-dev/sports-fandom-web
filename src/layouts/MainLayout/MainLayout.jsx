import { Box, CssBaseline } from '@mui/material';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const MainLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Topbar />
			<Sidebar />
			<Main children={children} />
		</Box>
	);
};

export default MainLayout;
