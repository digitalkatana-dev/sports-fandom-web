import { Box } from '@mui/material';
import Topbar from './components/Topbar';
import SideNav from './components/SideNav';
import Main from './components/Main';

const TestLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Topbar />
			<SideNav />
			<Main children={children} />
		</Box>
	);
};

export default TestLayout;
