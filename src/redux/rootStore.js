import { configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
import baseballReducer from './slices/baseballSlice';
import basketballReducer from './slices/basketballSlice';
import footballReducer from './slices/footballSlice';
import hockeyReducer from './slices/hockeySlice';

const userPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['user'],
};

const mlbPersistConfig = {
	key: 'mlb',
	storage,
	whitelist: ['mlbTeams'],
};

const nbaPersistConfig = {
	key: 'nba',
	storage,
	whitelist: ['nbaTeams'],
};

const nflPersistConfig = {
	key: 'nfl',
	storage,
	whitelist: ['nflTeams'],
};

const nhlPersistConfig = {
	key: 'nhl',
	storage,
	whitelist: ['nhlTeams'],
};

export const store = configureStore({
	reducer: {
		app: appReducer,
		user: persistReducer(userPersistConfig, userReducer),
		mlb: persistReducer(mlbPersistConfig, baseballReducer),
		nba: persistReducer(nbaPersistConfig, basketballReducer),
		nfl: persistReducer(nflPersistConfig, footballReducer),
		nhl: persistReducer(nhlPersistConfig, hockeyReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
			},
		}),
});

export const persistor = persistStore(store);
