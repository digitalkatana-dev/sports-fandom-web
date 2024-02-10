import { Box } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../../redux/slices/appSlice';
import { breakpoints } from '../../util/data';
import Topbar from './components/Topbar';
import SideNav from './components/SideNav';
import Main from './components/Main';

const MainLayout = ({ children }) => {
	const dispatch = useDispatch();

	const handleMobile = useCallback(() => {
		const handleResize = () => {
			if (window.innerWidth <= breakpoints.md) {
				dispatch(setIsMobile(true));
			} else {
				dispatch(setIsMobile(false));
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [dispatch]);

	useEffect(() => {
		handleMobile();
	}, [handleMobile]);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Topbar />
			<SideNav />
			<Main children={children} />
		</Box>
	);
};

export default MainLayout;
