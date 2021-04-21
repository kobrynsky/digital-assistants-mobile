import { StatusType } from "../_utils/statusType";

const { INITIAL } = StatusType;

export interface ShroomsState {
    status: {
        checkShroom: StatusType
    };
    imageUrl: string,
}

export const shroomsInitialState: ShroomsState = {
    status: {
        checkShroom: INITIAL,
    },

    imageUrl: null,
};