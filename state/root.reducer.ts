import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';
import shroomsSlice from './shrooms/shrooms.slice';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    shrooms: shroomsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
