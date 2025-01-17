import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'

export const getSmurfsData = () => dispatch => {
    dispatch({ type: GET_SMURFS_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=> {
            console.log("getSmurfsData res: ", res);
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_SMURFS_FAILURE, payload: err.response })
        })
}

export const POST_SMURF_START = 'POST_SMURF_START'; 
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'; 
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'; 

export const postSmurfData = smurf => dispatch => {
    dispatch({ type: POST_SMURF_START })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log("postSmurfData res: ", res);
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_SMURF_FAILURE, payload: err.response })
        })
}

export const DELETE_SMURF_START = 'DELETE_SMURF_START'; 
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'; 
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'; 

export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log("deleteSmurf res: ", res);
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response })
        })
}