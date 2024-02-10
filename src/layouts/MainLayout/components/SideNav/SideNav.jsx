import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../../../../redux/slices/appSlice';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import Drawer from '../Drawer';
import NavContent from '../NavContent';

const SideNav = () => {
	const { isMobile, drawerOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setDrawerOpen(!drawerOpen));
	};

	return (
		<>
			{isMobile ? (
				<MobileDrawer
					open={drawerOpen}
					onClose={handleClose}
					sx={{
						'& .MuiDrawer-paper': {
							backgroundColor: 'var(--primary)',
						},
					}}
				>
					<NavContent />
				</MobileDrawer>
			) : (
				<Drawer id='sidenav' variant='permanent' open={drawerOpen}>
					<NavContent />
				</Drawer>
			)}
		</>
	);
};

export default SideNav;
