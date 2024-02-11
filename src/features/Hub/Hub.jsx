import { Paper } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setNFLFav,
	setNBAFav,
	setMLBFav,
	setNHLFav,
	setSport,
	toggleSpread,
} from '../../redux/slices/appSlice';
import {
	getNflTeams,
	loadNFLTeamData,
	clearNFLNews,
} from '../../redux/slices/footballSlice';
import {
	getNbaTeams,
	loadNBATeamData,
	clearNBANews,
} from '../../redux/slices/basketballSlice';
import {
	getMlbTeams,
	loadMLBTeamData,
	clearMLBNews,
} from '../../redux/slices/baseballSlice';
import {
	getNhlTeams,
	loadNHLTeamData,
	clearNHLNews,
} from '../../redux/slices/hockeySlice';
import './hub.scss';
import TeamSelect from '../../components/TeamSelect';

const Hub = () => {
	const {
		spread,
		nflFav,
		nflFavKey,
		nbaFav,
		nbaFavKey,
		mlbFav,
		mlbFavKey,
		nhlFav,
		nhlFavKey,
	} = useSelector((state) => state.app);
	const { user } = useSelector((state) => state.user);
	const { nflTeams } = useSelector((state) => state.nfl);
	const { nbaTeams } = useSelector((state) => state.nba);
	const { mlbTeams } = useSelector((state) => state.mlb);
	const { nhlTeams } = useSelector((state) => state.nhl);
	const dispatch = useDispatch();

	const handleChange = (e, sport) => {
		const actionMap = {
			nfl: setNFLFav,
			nba: setNBAFav,
			mlb: setMLBFav,
			nhl: setNHLFav,
		};

		const action = actionMap[sport];

		action && dispatch(action(e.target.value));
	};

	const handleClick = (sport) => {
		let actionMap;
		let action;

		if (spread === false) {
			actionMap = {
				nfl: loadNFLTeamData(nflFavKey),
				nba: loadNBATeamData(nbaFavKey),
				mlb: loadMLBTeamData(mlbFavKey),
				nhl: loadNHLTeamData(nhlFavKey),
			};

			action = actionMap[sport];

			action && dispatch(action);
			dispatch(setSport(sport));
			dispatch(toggleSpread(true));
		} else {
			actionMap = {
				nfl: clearNFLNews,
				nba: clearNBANews,
				mlb: clearMLBNews,
				nhl: clearNHLNews,
			};

			action = actionMap[sport];

			dispatch(toggleSpread(false));
			action && dispatch(action());
		}
	};

	const handleLoadTeams = useCallback(() => {
		!nflTeams && dispatch(getNflTeams());
		!nbaTeams && dispatch(getNbaTeams());
		!mlbTeams && dispatch(getMlbTeams());
		!nhlTeams && dispatch(getNhlTeams());
	}, [nflTeams, nbaTeams, mlbTeams, nhlTeams, dispatch]);

	useEffect(() => {
		handleLoadTeams();
	}, [handleLoadTeams]);

	return (
		<div id='hub' className={spread ? 'spread' : ''}>
			<Paper className='hub-news' elevation={spread ? 12 : 0}>
				<h2>News</h2>
			</Paper>
			<Paper className='hub-stats' elevation={spread ? 12 : 0}>
				<h2>Stats</h2>
			</Paper>
			<Paper className='hub-center' elevation={!spread ? 12 : 0}>
				<div className='hub-header'>
					<h2>{`${user.firstName}'s Hub`}</h2>
				</div>
				<div className='hub-body'>
					<div className='body-top'>
						<div
							className='top-left'
							onClick={nflFav ? () => handleClick('nfl') : null}
						>
							<div className='wrapper'>
								<img src='/football.jpg' alt='football' />
								<div className='overlay'>
									{nflFav ? (
										<div className='fav-team-container'>
											<h3>Favorite Team:</h3>
											<h3>{nflFav}</h3>
										</div>
									) : (
										<TeamSelect
											sport='football'
											teams={nflTeams}
											onChange={(e) => handleChange(e, 'nfl')}
										/>
									)}
								</div>
							</div>
						</div>
						<div
							className='top-right'
							onClick={nbaFav ? () => handleClick('nba') : null}
						>
							<div className='wrapper'>
								<img src='/basketball.jpg' alt='basketball' />
								<div className='overlay'>
									{nbaFav ? (
										<div className='fav-team-container'>
											<h3>Favorite Team:</h3>
											<h3>{nbaFav}</h3>
										</div>
									) : (
										<TeamSelect
											sport='basketball'
											teams={nbaTeams}
											onChange={(e) => handleChange(e, 'nba')}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='body-bottom'>
						<div
							className='bottom-left'
							onClick={mlbFav ? () => handleClick('mlb') : null}
						>
							<div className='wrapper'>
								<img src='/baseball.jpg' alt='baseball' />
								<div className='overlay'>
									{mlbFav ? (
										<div className='fav-team-container'>
											<h3>Favorite Team:</h3>
											<h3>{mlbFav}</h3>
										</div>
									) : (
										<TeamSelect
											sport='baseball'
											teams={mlbTeams}
											onChange={(e) => handleChange(e, 'mlb')}
										/>
									)}
								</div>
							</div>
						</div>
						<div
							className='bottom-right'
							onClick={nhlFav ? () => handleClick('nhl') : null}
						>
							<div className='wrapper'>
								<img src='/hockey.jpg' alt='hockey' />
								<div className='overlay'>
									{nhlFav ? (
										<div className='fav-team-container'>
											<h3>Favorite Team:</h3>
											<h3>{nhlFav}</h3>
										</div>
									) : (
										<TeamSelect
											sport='hockey'
											teams={nhlTeams}
											onChange={(e) => handleChange(e, 'nhl')}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Paper>
			<Paper className='hub-players' elevation={spread ? 12 : 0}>
				<h2>Players</h2>
			</Paper>
			<Paper className='hub-standings' elevation={spread ? 12 : 0}>
				<h2>Standings</h2>
			</Paper>
		</div>
	);
};

export default Hub;
