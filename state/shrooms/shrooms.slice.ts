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
        checkShroomSuccess(state: ShroomsState) {
            state.status.checkShroom = SUCCESS;
        },
        checkShroomFailure(state: ShroomsState) {
            state.status.checkShroom = FAILED;
        },
    }
});

export default shroomsSlice;

export const {
    setImageUrl,

    checkShroomStart,
    checkShroomSuccess,
    checkShroomFailure,
} = shroomsSlice.actions;