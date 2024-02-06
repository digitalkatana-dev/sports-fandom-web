import { styled } from '@mui/material/styles';
import {
	Divider,
	Drawer as MuiDrawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../../../../redux/slices/appSlice';
import { sideNav } from '../../../../util/data';
import './sidebar.scss';

const drawerWidth = 160;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

const Sidebar = () => {
	const { drawerOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setDrawerOpen(false));
	};

	return (
		<Drawer variant='permanent' open={drawerOpen}>
			<DrawerHeader>
				<IconButton onClick={handleClose}>
					<MenuUnfoldOutlined className='menu-icon' />
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{sideNav.map((navItem) => (
					<ListItem key={navItem.id} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: drawerOpen ? 'initial' : 'center',
								px: 2.5,
							}}
							href={navItem.path}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: drawerOpen ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								{navItem.icon}
							</ListItemIcon>
							<ListItemText
								primary={navItem.title}
								sx={{ opacity: drawerOpen ? 1 : 0 }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
