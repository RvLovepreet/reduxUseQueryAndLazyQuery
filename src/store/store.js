import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {allCountry} from '../service/FetchAPI';

export const store = configureStore({
  reducer: {
    [allCountry.reducerPath]: allCountry.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(allCountry.middleware),
});

setupListeners(store.dispatch);
