import './statsTile.scss';

const StatsTile = ({ stats }) => {
	return (
		<div id='stats-tile'>
			<div className='wrapper'>
				{stats?.map((item) => (
					<div className='team-card' key={item.Team}>
						<div className='tc-top'>
							<div className='img-container'>
								<img src={item?.PhotoUrl} alt='' />
							</div>
						</div>
						<div className='tc-center'>
							<div className='name-container'>
								<h5>{item.TeamName}</h5>
							</div>
						</div>
						<div className='tc-bottom'>
							<div className='stat-wrapper'>
								<h5>Season:</h5>
								<span>{item.Season}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>PF:</h5>
								<span>{item.Score}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>PA:</h5>
								<span>{item.OpponentScore}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Touchdowns:</h5>
								<span>{item.Touchdowns}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Penalties:</h5>
								<span>{item.Penalties}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StatsTile;
