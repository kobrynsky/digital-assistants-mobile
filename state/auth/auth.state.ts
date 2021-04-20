import { StatusType } from '../_utils/statusType';

const { INITIAL } = StatusType;

export interface AuthState {
    status: {
        register: StatusType,
        login: StatusType,
    };
    token: string,
    username: string,
}

export const authInitialState: AuthState = {
    status: {
        register: INITIAL,
        login: INITIAL,
    },
    token: null,
    username: null,
};