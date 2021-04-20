import agent from "../../api/requests";
import { AppThunk } from "../store";
import { registerStart, registerSuccess, registerFailure, loginFailure, loginStart, loginSuccess } from "./auth.slice";

export const register = (request, onSuccess?): AppThunk => async (dispatch) => {
    dispatch(registerStart());
    agent.Auth.register(request)
        .then(() => {
            dispatch(registerSuccess())
            if (onSuccess)
                onSuccess()
        })
        .catch(() => { dispatch(registerFailure()) })
};

export const login = (request, onSuccess?): AppThunk => async (dispatch) => {
    dispatch(loginStart());
    agent.Auth.login(request)
        .then((response) => {
            dispatch(loginSuccess(response.data.token))
            if (onSuccess)
                onSuccess()
        })
        .catch(() => dispatch(loginFailure()))
};