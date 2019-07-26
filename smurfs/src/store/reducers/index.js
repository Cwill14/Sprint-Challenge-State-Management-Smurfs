import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE
} from '../actions';

export const initialState = {
    gettingSmurfs: false,
    error: "",
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
        case GET_SMURFS_START:
            return {
                ...state,
                gettingSmurfs: true,
                error: "",
                smurfs: []
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                gettingSmurfs: false,
                error: "",
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                gettingSmurfs: false,
                error: action.payload
            }
    }
}