import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import sportsApi from '../../api/sportsApi';

export const getNhlTeams = createAsyncThunk(
	'nhl/get_teams',
	async (data, { rejectWithValue }) => {
		try {
			const res = await sportsApi.get(
				`/nhl/scores/json/teams?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const loadNHLTeamData = createAsyncThunk(
	'nhl/load_team_data',
	async (data, { rejectWithValue }) => {
		try {
			const rawNews = await sportsApi.get(
				`/nhl/scores/json/News?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			const news = rawNews.data;
			const rawPlayers = await sportsApi.get(
				`/nhl/scores/json/Players/${data}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			const players = rawPlayers.data;
			const season = await sportsApi(
				`/nhl/scores/json/CurrentSeason?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			let rawStats;
			rawStats = await sportsApi.get(
				`/nhl/scores/json/TeamSeasonStats/${season.data.Season}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			if (rawStats.data.length === 0) {
				rawStats = await sportsApi.get(
					`/nhl/scores/json/TeamSeasonStats/${season.data.Season - 1}?key=${
						process.env.REACT_APP_HOCKEY_API_KEY_
					}`
				);
			}
			const stats = rawStats.data;
			let rawStandings;
			rawStandings = await sportsApi.get(
				`/nhl/scores/json/Standings/${season.data.Season}?key=${process.env.REACT_APP_HOCKEY_API_KEY_}`
			);
			if (rawStandings.data.length === 0) {
				rawStandings = await sportsApi.get(
					`/nhl/scores/json/Standings/${season.data.Season - 1}?key=${
						process.env.REACT_APP_HOCKEY_API_KEY_
					}`
				);
			}
			const standings = rawStandings.data;

			return { news, players, stats, standings };
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getNHLNews = createAsyncThunk();

export const getNHLPlayers = createAsyncThunk();

export const getNHLStats = createAsyncThunk();

export const getNHLStandings = createAsyncThunk();

export const hockeyAdapter = createEntityAdapter();
const initialState = hockeyAdapter.getInitialState({
	loading: false,
	nhlTeams: null,
	nhlNews: null,
	nhlPlayers: null,
	nhlStats: null,
	nhlStandings: null,
	nhlTeam: null,
	errors: null,
});

export const hockeySlice = createSlice({
	name: 'nhl',
	initialState,
	reducers: {
		clearNHLNews: (state) => {
			state.nhlNews = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNhlTeams.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(getNhlTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.nhlTeams = action.payload;
			})
			.addCase(getNhlTeams.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(loadNHLTeamData.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(loadNHLTeamData.fulfilled, (state, action) => {
				state.loading = false;
				state.nhlNews = action.payload.news;
				state.nhlPlayers = action.payload.players;
				state.nhlStats = action.payload.stats;
				state.nhlStandings = action.payload.standings;
			})
			.addCase(loadNHLTeamData.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const { clearNHLNews } = hockeySlice.actions;

export default hockeySlice.reducer;
