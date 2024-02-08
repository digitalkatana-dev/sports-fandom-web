import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './hub.scss';
import TeamSelect from '../../components/TeamSelect';

const Hub = () => {
	const { spread, nflFav, nbaFav, mlbFav, nhlFav } = useSelector(
		(state) => state.app
	);
	const { nflTeams } = useSelector((state) => state.nfl);
	const { nbaTeams } = useSelector((state) => state.nba);
	const { mlbTeams } = useSelector((state) => state.mlb);
	const { nhlTeams } = useSelector((state) => state.nhl);
	const dispatch = useDispatch();

	return (
		<div id='hub' className={spread ? 'spread' : ''}>
			<div className='hub-news'>
				<h1>News</h1>
			</div>
			<div className='hub-stats'>
				<h1>Stats</h1>
			</div>
			<Paper className='hub-center'>
				<div className='hub-header'>
					<h1>Hub</h1>
				</div>
				<div className='hub-body'>
					<div className='body-top'>
						<div className='top-left'>
							<div className='wrapper'>
								{nflFav ? (
									<h3>
										Favorite Team: <span>{nflFav}</span>
									</h3>
								) : (
									<TeamSelect sport='football' teams={nflTeams} />
								)}
							</div>
						</div>
						<div className='top-right'>
							<div className='wrapper'>
								{nbaFav ? (
									<h3>
										Favorite Team: <span>{nbaFav}</span>
									</h3>
								) : (
									<TeamSelect sport='basketball' teams={nbaTeams} />
								)}
							</div>
						</div>
					</div>
					<div className='body-bottom'>
						<div className='bottom-left'>
							<div className='wrapper'>
								{mlbFav ? (
									<h3>
										Favorite Team: <span>{mlbFav}</span>
									</h3>
								) : (
									<TeamSelect sport='baseball' teams={mlbTeams} />
								)}
							</div>
						</div>
						<div className='bottom-right'>
							<div className='wrapper'>
								{nhlFav ? (
									<h3>
										Favorite Team: <span>{nhlFav}</span>
									</h3>
								) : (
									<TeamSelect sport='hockey' teams={nhlTeams} />
								)}
							</div>
						</div>
					</div>
				</div>
			</Paper>
			<div className='hub-players'>
				<h1>Players</h1>
			</div>
			<div className='hub-standings'>
				<h1>Standings</h1>
			</div>
		</div>
	);
};

export default Hub;
