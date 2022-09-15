import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { celebritiesSlice } from '../features/slices';

export const store = configureStore({
  reducer: {
    [celebritiesSlice.reducerPath]: celebritiesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(celebritiesSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(() => store, { debug: true });
