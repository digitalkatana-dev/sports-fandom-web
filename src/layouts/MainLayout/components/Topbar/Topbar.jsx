import { IconButton, Toolbar, Typography } from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../../../../redux/slices/appSlice';
import './topbar.scss';
import AppBar from '../../../../components/AppBar';

const Topbar = () => {
	const { drawerOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleDrawer = () => {
		dispatch(setDrawerOpen(true));
	};

	return (
		<AppBar position='fixed' open={drawerOpen}>
			<Toolbar>
				<IconButton
					onClick={handleDrawer}
					edge='start'
					sx={{ marginRight: 5, ...(drawerOpen && { display: 'none' }) }}
				>
					<MenuUnfoldOutlined style={{ color: 'var(--paragraph)' }} />
				</IconButton>
				<Typography variant='h6' noWrap component='div'>
					Sports Fandom
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
