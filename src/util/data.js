import DashboardIcon from '@mui/icons-material/Dashboard';
import FootballIcon from '@mui/icons-material/SportsFootball';
import BasketballIcon from '@mui/icons-material/SportsBasketball';
import BaseballIcon from '@mui/icons-material/SportsBaseball';
import HockeyIcon from '@mui/icons-material/SportsHockey';

export const sideNav = [
	{
		id: 1,
		title: 'Hub',
		icon: <DashboardIcon className='side-nav-icon' />,
		path: '/',
	},
	{
		id: 2,
		title: 'Football',
		icon: <FootballIcon className='side-nav-icon' />,
		path: '/football',
	},
	{
		id: 3,
		title: 'Basketball',
		icon: <BasketballIcon className='side-nav-icon' />,
		path: '/basketball',
	},
	{
		id: 4,
		title: 'Baseball',
		icon: <BaseballIcon className='side-nav-icon' />,
		path: '/baseball',
	},
	{
		id: 5,
		title: 'Hockey',
		icon: <HockeyIcon className='side-nav-icon' />,
		path: '/hockey',
	},
];
