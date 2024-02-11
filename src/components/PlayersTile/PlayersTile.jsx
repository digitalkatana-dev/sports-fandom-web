import './playersTile.scss';

const PlayersTile = ({ players }) => {
	return (
		<div id='players-tile'>
			<div className='wrapper'>
				{players?.map((player) => (
					<div className='player-card' key={player.PlayerID}>
						<div className='pc-top'>
							<div className='img-container'>
								<img src={player.PhotoUrl} alt='' />
							</div>
						</div>
						<div className='pc-center'>
							<div className='name-container'>
								<h5>{player.FirstName + ' ' + player.LastName}</h5>
							</div>
						</div>
						<div className='pc-bottom'>
							<div className='stat-wrapper'>
								<h5>Position:</h5>
								<span>{player.Position}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Age:</h5>
								<span>{player.Age}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Height:</h5>
								<span>{player.Height}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Weight:</h5>
								<span>{player.Weight}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Status:</h5>
								<span>{player.Status}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlayersTile;
