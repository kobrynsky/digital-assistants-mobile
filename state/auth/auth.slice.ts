import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusType } from '../_utils/statusType';
import { authInitialState, AuthState } from './auth.state';

const { FAILED, LOADING, SUCCESS } = StatusType;

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        registerStart: (state: AuthState) => {
            state.status.register = LOADING;
        },
        registerSuccess(state: AuthState) {
            state.status.register = SUCCESS;
        },
        registerFailure(state: AuthState) {
            state.status.register = FAILED;
        },

        loginStart: (state: AuthState) => {
            state.status.login = LOADING;
        },
        loginSuccess(state: AuthState, action: PayloadAction<any>) {
            state.token = action.payload.token;
            state.status.login = SUCCESS;
        },
        loginFailure(state: AuthState) {
            state.status.login = FAILED;
        },

        logout(state: AuthState) {
            state.token = null;
        }
    }
});

export default authSlice;

export const {
    registerStart,
    registerSuccess,
    registerFailure,

    loginStart,
    loginSuccess,
    loginFailure,

    logout,
} = authSlice.actions;