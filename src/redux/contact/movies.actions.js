import Axios from "axios"

import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE
} from "./movies.actionTypes";


let fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_MOVIES_REQUEST });
        let dataURL = `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`;
        Axios.get(dataURL).then((response) => {
            let allMovies = response.data;
            let movies = allMovies.filter((movie) => {
                return movie.programType === "movie"
            });
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies })
        }).catch((error) => {
            dispatch({ type: FETCH_MOVIES_FAILURE, payload: error })
        });
    }
};


let fetchSeries = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SERIES_REQUEST });
        let dataURL = `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`;
        Axios.get(dataURL).then((response) => {
            let allMovies = response.data;
            let series = allMovies.filter((serie) => {
                return serie.programType === "series"
            });
            dispatch({ type: FETCH_SERIES_SUCCESS, payload: series })
        }).catch((error) => {
            dispatch({ type: FETCH_SERIES_FAILURE, payload: error })
        });
    }
};


export { fetchMovies, fetchSeries };