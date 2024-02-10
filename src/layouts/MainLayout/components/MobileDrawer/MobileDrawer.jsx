import { Drawer } from '@mui/material';

const MobileDrawer = ({ open, onClose, sx, children }) => {
	return (
		<Drawer open={open} onClose={onClose} sx={sx}>
			{children}
		</Drawer>
	);
};

export default MobileDrawer;
