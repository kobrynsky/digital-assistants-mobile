import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusType } from '../_utils/statusType';
import { shroomsInitialState, ShroomsState } from './shrooms.state';

const { FAILED, LOADING, SUCCESS } = StatusType;

export const shroomsSlice = createSlice({
    name: 'shrooms',
    initialState: shroomsInitialState,
    reducers: {
        setImageUrl: (state: ShroomsState, action: PayloadAction<string>) => {
            state.imageUrl = action.payload;
        },

        checkShroomStart: (state: ShroomsState) => {
            state.status.checkShroom = LOADING;
        },
        checkShroomSuccess(state: ShroomsState, action: PayloadAction<any>) {
            state.predictedClass = action.payload.data.predicted_class
            state.percentageProbability = Number(action.payload.data.percentage_probability) * 100
            state.status.checkShroom = SUCCESS;
        },
        checkShroomFailure(state: ShroomsState) {
            state.status.checkShroom = FAILED;
        },
        clearShroomsState(state: ShroomsState) {
            state.status = shroomsInitialState.status;
            state.predictedClass = null;
            state.percentageProbability = null;
            state.imageUrl = null;
        }
    }
});

export default shroomsSlice;

export const {
    setImageUrl,

    checkShroomStart,
    checkShroomSuccess,
    checkShroomFailure,

    clearShroomsState,
} = shroomsSlice.actions;