import { StatusType } from "../_utils/statusType";

const { INITIAL } = StatusType;

export interface ShroomsState {
    status: {
        checkShroom: StatusType
    };
    predictedClass: string,
    percentageProbability: number,
    imageUrl: string,
}

export const shroomsInitialState: ShroomsState = {
    status: {
        checkShroom: INITIAL,
    },

    predictedClass: null,
    percentageProbability: 0,
    imageUrl: null,
};