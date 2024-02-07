import {
	Divider,
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
import { userLogout } from '../../../../redux/slices/userSlice';
import { sideNav } from '../../../../util/data';
import './sidebar.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '../../../../components/Drawer';
import DrawerHeader from '../../../../components/DrawerHeader';

const Sidebar = () => {
	const { drawerOpen } = useSelector((state) => state.app);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setDrawerOpen(false));
	};

	const handleLogout = () => {
		dispatch(userLogout());
	};

	return (
		<Drawer id='sidebar' variant='permanent' open={drawerOpen}>
			<DrawerHeader>
				<IconButton onClick={handleClose}>
					<MenuUnfoldOutlined className='menu-icon' />
				</IconButton>
			</DrawerHeader>
			<Divider className='divider' />
			<List>
				{sideNav.map((navItem) => (
					<ListItem
						key={navItem.id}
						disablePadding
						sx={{
							display: 'block',
							borderRadius: '10px',
							'&:hover': { backgroundColor: 'var(--brand)' },
						}}
					>
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
									color: 'var(--paragraph)',
								}}
							>
								{navItem.icon}
							</ListItemIcon>
							<ListItemText
								primary={navItem.title}
								sx={{
									opacity: drawerOpen ? 1 : 0,
									color: 'var(--paragraph)',
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
				{user && (
					<>
						<ListItem
							disablePadding
							sx={{
								display: 'block',
								borderRadius: '10px',
								'&:hover': { backgroundColor: 'var(--brand)' },
							}}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: drawerOpen ? 'initial' : 'center',
									px: 2.5,
								}}
								href='/profile'
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: drawerOpen ? 3 : 'auto',
										justifyContent: 'center',
										color: 'var(--paragraph)',
									}}
								>
									<AccountCircleIcon />
								</ListItemIcon>
								<ListItemText
									primary='Profile'
									sx={{
										opacity: drawerOpen ? 1 : 0,
										color: 'var(--paragraph)',
									}}
								/>
							</ListItemButton>
						</ListItem>
						<ListItem
							disablePadding
							sx={{
								display: 'block',
								borderRadius: '10px',
								'&:hover': { backgroundColor: 'var(--brand)' },
							}}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: drawerOpen ? 'initial' : 'center',
									px: 2.5,
								}}
								onClick={handleLogout}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: drawerOpen ? 3 : 'auto',
										justifyContent: 'center',
										color: 'var(--paragraph)',
									}}
								>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText
									primary='Logout'
									sx={{
										opacity: drawerOpen ? 1 : 0,
										color: 'var(--paragraph)',
									}}
								/>
							</ListItemButton>
						</ListItem>
					</>
				)}
			</List>
		</Drawer>
	);
};

export default Sidebar;
