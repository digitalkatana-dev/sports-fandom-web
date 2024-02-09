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
			<div className='hub-news'>
				<h1>News</h1>
			</div>
			<div className='hub-stats'>
				<h1>Stats</h1>
			</div>
			<Paper className='hub-center' elevation={12}>
				<div className='hub-header'>
					<h1>Hub</h1>
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
										<h3>
											Favorite Team: <span>{nflFav}</span>
										</h3>
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
										<h3>
											Favorite Team: <span>{nbaFav}</span>
										</h3>
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
										<h3>
											Favorite Team: <span>{mlbFav}</span>
										</h3>
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
										<h3>
											Favorite Team: <span>{nhlFav}</span>
										</h3>
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
