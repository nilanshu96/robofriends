import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const getRobots = () => (dispatch) => {
    dispatch({type: GET_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => dispatch({type: GET_ROBOTS_SUCCESS, payload: robots}))
            .catch(error => dispatch({type: GET_ROBOTS_FAILED, payload: error}))
}