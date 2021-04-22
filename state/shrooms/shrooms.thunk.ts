import agent from "../../api/requests";
import { AppThunk } from "../store";
import { checkShroomStart, checkShroomSuccess, checkShroomFailure } from "./shrooms.slice";

export const checkShroom = (imageUrl): AppThunk => async (dispatch) => {
    dispatch(checkShroomStart());
    agent.Shrooms.checkShroom(imageUrl)
        .then((response) => dispatch(checkShroomSuccess(response)))
        .catch(() => dispatch(checkShroomFailure()))
};