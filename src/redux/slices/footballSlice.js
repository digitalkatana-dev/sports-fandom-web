import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import sportsApi from '../../api/sportsApi';

export const getNflTeams = createAsyncThunk(
	'nfl/get_teams',
	async (data, { rejectWithValue }) => {
		try {
			const res = await sportsApi.get(
				`/nfl/scores/json/Teams?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const loadNFLTeamData = createAsyncThunk(
	'nfl/load_team_data',
	async (data, { rejectWithValue }) => {
		try {
			const rawNews = await sportsApi.get(
				`/nfl/scores/json/News?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			const news = rawNews.data;
			const rawPlayers = await sportsApi.get(
				`/nfl/scores/json/Players/${data}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			const players = rawPlayers.data;
			const season = await sportsApi(
				`/nfl/scores/json/CurrentSeason?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			let rawStats;
			rawStats = await sportsApi.get(
				`/nfl/scores/json/TeamSeasonStats/${season.data}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			if (rawStats.data.length === 0) {
				rawStats = await sportsApi.get(
					`/nfl/scores/json/TeamSeasonStats/${season.data - 1}?key=${
						process.env.REACT_APP_FOOTBALL_API_KEY_
					}`
				);
			}
			const stats = rawStats.data;
			let rawStandings;
			rawStandings = await sportsApi.get(
				`/nfl/scores/json/Standings/${season.data}?key=${process.env.REACT_APP_FOOTBALL_API_KEY_}`
			);
			if (rawStandings.data.length === 0) {
				rawStandings = await sportsApi.get(
					`/nfl/scores/json/Standings/${season.data - 1}?key=${
						process.env.REACT_APP_FOOTBALL_API_KEY_
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

export const getNFLNews = createAsyncThunk();

export const getNFLPlayers = createAsyncThunk();

export const getNFLStats = createAsyncThunk();

export const getNFLStandings = createAsyncThunk();

export const footballAdapter = createEntityAdapter();
const initialState = footballAdapter.getInitialState({
	loading: false,
	nflTeams: null,
	nflNews: null,
	nflPlayers: null,
	nflStats: null,
	nflStandings: null,
	nflTeam: null,
	errors: null,
});

export const footballSlice = createSlice({
	name: 'nfl',
	initialState,
	reducers: {
		clearNFLNews: (state) => {
			state.nflNews = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNflTeams.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(getNflTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.nflTeams = action.payload;
			})
			.addCase(getNflTeams.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(loadNFLTeamData.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(loadNFLTeamData.fulfilled, (state, action) => {
				state.loading = false;
				state.nflNews = action.payload.news;
				state.nflPlayers = action.payload.players;
				state.nflStats = action.payload.stats;
				state.nflStandings = action.payload.standings;
			})
			.addCase(loadNFLTeamData.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const { clearNFLNews } = footballSlice.actions;

export default footballSlice.reducer;
