import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../../../../redux/slices/appSlice';
import './topbar.scss';

const Topbar = () => {
	const { isMobile, drawerOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleDrawer = () => {
		dispatch(setDrawerOpen(!drawerOpen));
	};

	return (
		<AppBar
			id='topbar'
			sx={{
				boxShadow: 'none',
				zIndex: 1101,
				bgcolor: 'var(--secondary)',
			}}
		>
			<Toolbar>
				{isMobile && (
					<IconButton sx={{ mr: 1 }} onClick={handleDrawer}>
						<MenuUnfoldOutlined className='menu-icon' />
					</IconButton>
				)}
				<Box sx={{ flexGrow: 1 }} />
				<Stack direction='row' alignItems='center' spacing={1}>
					<h6 style={{ color: 'white' }}>Sports Fandom</h6>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
