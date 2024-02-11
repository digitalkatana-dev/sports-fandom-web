import DashboardIcon from '@mui/icons-material/Dashboard';
import FootballIcon from '@mui/icons-material/SportsFootball';
import BasketballIcon from '@mui/icons-material/SportsBasketball';
import BaseballIcon from '@mui/icons-material/SportsBaseball';
import HockeyIcon from '@mui/icons-material/SportsHockey';

export const breakpoints = {
	xs: 0,
	ms: 600,
	sm: 768,
	md: 1024,
	lg: 1266,
	xl: 1536,
};

export const sideNav = [
	{
		id: 1,
		title: 'Hub',
		icon: <DashboardIcon />,
		path: '/hub',
	},
	{
		id: 2,
		title: 'Football',
		icon: <FootballIcon />,
		path: '/football',
	},
	{
		id: 3,
		title: 'Basketball',
		icon: <BasketballIcon />,
		path: '/basketball',
	},
	{
		id: 4,
		title: 'Baseball',
		icon: <BaseballIcon />,
		path: '/baseball',
	},
	{
		id: 5,
		title: 'Hockey',
		icon: <HockeyIcon />,
		path: '/hockey',
	},
];
