import { CircularProgress } from '@mui/material';
import './touchable.scss';

const TouchableOpacity = ({ loading, className, onClick, children }) => {
	return (
		<button className={`pressable ${className}`} onClick={onClick}>
			{loading ? <CircularProgress /> : children}
		</button>
	);
};

export default TouchableOpacity;
