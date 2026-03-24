import { configureStore } from '@reduxjs/toolkit';
import { vehiclesApi } from '../features/vehicles/vehiclesApi';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehiclesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;