import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './constants';

const initialSearchState = {
    searchField: ''
}

export const searchRobots = (state = initialSearchState, action = {}) => {

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialFetchState = {
    isPending: true,
    robots: [],
    error: null
}

export const fetchRobots = (state = initialFetchState, action = {}) => {

    switch(action.type) {
        case GET_ROBOTS_PENDING: 
            return {...state, isPending: true};
        case GET_ROBOTS_SUCCESS:
            return {...state, isPending: false, robots: action.payload};
        case GET_ROBOTS_FAILED:
            return {...state, isPending: false, error: action.payload};
        default: 
            return state;
    }
}