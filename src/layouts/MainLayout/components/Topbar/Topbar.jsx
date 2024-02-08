import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import './topbar.scss';

const Topbar = () => {
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
				<Box sx={{ flexGrow: 1 }} />
				<Stack direction='row' alignItems='center' spacing={1}>
					<h6 style={{ color: 'white' }}>Sports Fandom</h6>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
