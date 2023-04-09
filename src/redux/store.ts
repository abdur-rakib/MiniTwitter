import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import userReducer from './user/userSlice';
import tweetReducer from './tweet/tweetSlice';
import {AppDispatchType} from '../types';
import {reduxStorage} from '../services/storageService';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  blacklist: ['user', 'tweet'],
};

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage: reduxStorage,
  blacklist: ['isLoading', 'error'],
};
const tweetPersistConfig = {
  key: 'tweet',
  version: 1,
  storage: reduxStorage,
  blacklist: ['isLoading', 'error'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  tweet: persistReducer(tweetPersistConfig, tweetReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export default store;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
