import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import auth from '../redux/auth/authSlice';
import {api} from '../api';
import {reduxStorage} from '../services/storageService';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

// extra middlewares
const extraMiddlewares = [];
if (__DEV__) {
  const createDebugger = require('rn-redux-middleware-flipper').default;
  extraMiddlewares.push(createDebugger());
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
};

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        // Redux persist
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(api.middleware),
    ...options,
  });

export const store = createStore(extraMiddlewares);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
