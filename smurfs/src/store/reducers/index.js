import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from '../actions';

export const initialState = {
    gettingSmurfs: false,
    addingSmurf: false,
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
        case POST_SMURF_START:
            return {
                ...state,
                addingSmurf: true,
                error: "",
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                error: "",
                smurfs: [...state.smurfs, action.payload]
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload
            }
    }
}