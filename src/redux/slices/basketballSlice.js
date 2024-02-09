import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import sportsApi from '../../api/sportsApi';

export const getNbaTeams = createAsyncThunk(
	'nba/get_teams',
	async (data, { rejectWithValue }) => {
		try {
			const res = await sportsApi.get(
				`/nba/scores/json/teams?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const loadNBATeamData = createAsyncThunk(
	'nba/load_team_data',
	async (data, { rejectWithValue }) => {
		try {
			const rawNews = await sportsApi.get(
				`/nba/scores/json/News?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);
			const news = rawNews.data;
			const rawPlayers = await sportsApi.get(
				`/nba/scores/json/Players/${data}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);
			const players = rawPlayers.data;
			const season = await sportsApi(
				`/nba/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);

			let rawStats;
			rawStats = await sportsApi.get(
				`/nba/scores/json/TeamSeasonStats/${season.data.Season}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);
			if (rawStats.data.length === 0) {
				rawStats = await sportsApi.get(
					`/nba/scores/json/TeamSeasonStats/${season.data.Season - 1}?key=${
						process.env.REACT_APP_BASKETBALL_API_KEY_
					}`
				);
			}
			const stats = rawStats.data;

			let rawStandings;
			rawStandings = await sportsApi.get(
				`/nba/scores/json/Standings/${season.data.Season}?key=${process.env.REACT_APP_BASKETBALL_API_KEY_}`
			);
			if (rawStandings.data.length === 0) {
				rawStandings = await sportsApi.get(
					`/nba/scores/json/Standings/${season.data.Season - 1}?key=${
						process.env.REACT_APP_BASKETBALL_API_KEY_
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

export const getNBANews = createAsyncThunk();

export const getNBAPlayers = createAsyncThunk();

export const getNBAStats = createAsyncThunk();

export const getNBAStandings = createAsyncThunk();

export const basketballAdapter = createEntityAdapter();
const initialState = basketballAdapter.getInitialState({
	loading: false,
	nbaTeams: null,
	nbaNews: null,
	nbaPlayers: null,
	nbaStats: null,
	nbaStandings: null,
	nbaTeam: null,
	errors: null,
});

export const basketballSlice = createSlice({
	name: 'nba',
	initialState,
	reducers: {
		clearNBANews: (state) => {
			state.nbaNews = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNbaTeams.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(getNbaTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.nbaTeams = action.payload;
			})
			.addCase(getNbaTeams.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(loadNBATeamData.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(loadNBATeamData.fulfilled, (state, action) => {
				state.loading = false;
				state.nbaNews = action.payload.news;
				state.nbaPlayers = action.payload.players;
				state.nbaStats = action.payload.stats;
				state.nbaStandings = action.payload.standings;
			})
			.addCase(loadNBATeamData.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const { clearNBANews } = basketballSlice.actions;

export default basketballSlice.reducer;
