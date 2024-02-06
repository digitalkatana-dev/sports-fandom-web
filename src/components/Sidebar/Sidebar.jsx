import { IconButton } from '@mui/material';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sideNav } from '../../util/data';
import './sidebar.scss';

const Sidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div id='sidebar' className={menuOpen ? 'active' : ''}>
			<div className='topper'>
				<IconButton onClick={() => setMenuOpen(!menuOpen)}>
					<MenuUnfoldOutlined className='menu-icon' />
				</IconButton>
			</div>
			<hr />
			<div className='body'>
				<ul>
					{sideNav.map((navItem) => (
						<Link key={navItem.id} to={navItem.path} className='router-link'>
							<li>
								{navItem.icon}
								<span>{navItem.title}</span>
							</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
