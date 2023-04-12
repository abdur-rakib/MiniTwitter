import {configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import auth from '../redux/auth/authSlice';
import {api} from '../api';

// extra middlewares
const extraMiddlewares = [];
if (__DEV__) {
  const createDebugger = require('rn-redux-middleware-flipper').default;
  extraMiddlewares.push(createDebugger());
}

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  });

export const store = createStore(extraMiddlewares);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
