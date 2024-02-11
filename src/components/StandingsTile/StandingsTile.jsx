import './standingsTile.scss';

const StandingsTile = ({ standings }) => {
	return (
		<div id='standings-tile'>
			<div className='wrapper'>
				{standings?.map((item) => (
					<div className='item-card' key={item.TeamID}>
						<div className='ic-top'>
							<div className='img-container'>
								<img src={item?.photo} alt='' />
							</div>
						</div>
						<div className='ic-center'>
							<div className='name-container'>
								<h5>{item.Name}</h5>
							</div>
							<div className='division-conference'>
								<h5>{item.Conference + ' ' + item.Division}</h5>
							</div>
						</div>
						<div className='ic-bottom'>
							<div className='stat-wrapper'>
								<h5>Season:</h5>
								<span>{item.Season}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Wins:</h5>
								<span>{item.Wins}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Losses:</h5>
								<span>{item.Losses}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Div Rank</h5>
								<span>{item.DivisionRank}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Div Wins</h5>
								<span>{item.DivisionWins}</span>
							</div>
							<div className='stat-wrapper'>
								<h5>Div Losses</h5>
								<span>{item.DivisionLosses}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StandingsTile;
