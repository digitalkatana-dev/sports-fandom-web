import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import sportsApi from '../../api/sportsApi';

export const getMlbTeams = createAsyncThunk(
	'mlb/get_teams',
	async (data, { rejectWithValue }) => {
		try {
			const res = await sportsApi.get(
				`/mlb/scores/json/teams?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const loadMLBTeamData = createAsyncThunk(
	'mlb/load_team_data',
	async (data, { rejectWithValue }) => {
		try {
			const rawNews = await sportsApi.get(
				`/mlb/scores/json/News?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);
			const news = rawNews.data;
			const rawPlayers = await sportsApi.get(
				`/mlb/scores/json/Players/${data}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);
			const players = rawPlayers.data;
			const season = await sportsApi(
				`/mlb/scores/json/CurrentSeason?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);

			let rawStats;
			rawStats = await sportsApi.get(
				`/mlb/scores/json/TeamSeasonStats/${season.data.Season}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);

			if (rawStats.data.length === 0) {
				rawStats = await sportsApi.get(
					`/mlb/scores/json/TeamSeasonStats/${season.data.Season - 1}?key=${
						process.env.REACT_APP_BASEBALL_API_KEY_
					}`
				);
			}
			const stats = rawStats.data;

			let rawStandings;
			rawStandings = await sportsApi.get(
				`/mlb/scores/json/Standings/${season.data.Season}?key=${process.env.REACT_APP_BASEBALL_API_KEY_}`
			);

			if (rawStandings.data.length === 0) {
				rawStandings = await sportsApi.get(
					`/mlb/scores/json/Standings/${season.data.Season - 1}?key=${
						process.env.REACT_APP_BASEBALL_API_KEY_
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

export const getMLBNews = createAsyncThunk();

export const getMLBPlayers = createAsyncThunk();

export const getMLBStats = createAsyncThunk();

export const getMLBStandings = createAsyncThunk();

export const baseballAdapter = createEntityAdapter();
const initialState = baseballAdapter.getInitialState({
	loading: false,
	mlbTeams: null,
	mlbNews: null,
	mlbPlayers: null,
	mlbStats: null,
	mlbStandings: null,
	mlbTeam: null,
	errors: null,
});

export const baseballSlice = createSlice({
	name: 'mlb',
	initialState,
	reducers: {
		clearMLBNews: (state) => {
			state.mlbNews = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getMlbTeams.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(getMlbTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.mlbTeams = action.payload;
			})
			.addCase(getMlbTeams.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(loadMLBTeamData.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(loadMLBTeamData.fulfilled, (state, action) => {
				state.loading = false;
				state.mlbNews = action.payload.news;
				state.mlbPlayers = action.payload.players;
				state.mlbStats = action.payload.stats;
				state.mlbStandings = action.payload.standings;
			})
			.addCase(loadMLBTeamData.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const { clearMLBNews } = baseballSlice.actions;

export default baseballSlice.reducer;
