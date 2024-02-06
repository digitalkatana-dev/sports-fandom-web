import { styled } from '@mui/material/styles';
import {
	AppBar as MuiAppBar,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../../../../redux/slices/appSlice';
import './topbar.scss';

const drawerWidth = 170;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	backgroundColor: 'var(--secondary)',
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

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
