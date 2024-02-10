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
import { sideNav } from '../../../../util/data';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './navContent.scss';
import DrawerHeader from '../DrawerHeader';

const NavContent = () => {
	const { user } = useSelector((state) => state.user);
	const { isMobile, drawerOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setDrawerOpen(!drawerOpen));
	};

	const handleLogout = () => {};

	return (
		<div id='nav-content'>
			<DrawerHeader>
				<IconButton onClick={handleClose}>
					<MenuUnfoldOutlined className='menu-icon' />
				</IconButton>
			</DrawerHeader>
			<Divider className='divider' />
			<List className={!isMobile ? 'nav-item-list' : ''}>
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
		</div>
	);
};

export default NavContent;
