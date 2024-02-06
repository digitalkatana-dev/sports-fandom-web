import React from 'react';
import './topbar.scss';

const Topbar = () => {
	return (
		<div id='topbar'>
			<div className='wrapper'>
				<div className='left'>Left</div>
				<div className='center'>Sports Fandom</div>
				<div className='right'>Right</div>
			</div>
		</div>
	);
};

export default Topbar;
