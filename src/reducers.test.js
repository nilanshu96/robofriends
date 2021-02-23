import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './constants';
import { searchRobots, fetchRobots } from './reducers';

const initialSearchState = {
    searchField: ''
}

describe("Reducer tests - searchRobots", () => {
    it('returns default state', () => {
        expect(searchRobots(undefined, {})).toEqual(initialSearchState);
    })

    it('state after action CHANGE_SEARCH_FIELD', () => {
        expect(searchRobots(undefined, { type: CHANGE_SEARCH_FIELD, payload: 'hello' })).toEqual({ searchField: 'hello' });
    })
})

const initialFetchState = {
    isPending: true,
    robots: [],
    error: null
}

describe("Reducer tests - fetchRobots", () => {
    it('returns default state', () => {
        expect(fetchRobots(undefined, {})).toEqual(initialFetchState);
    })

    it('state after action GET_ROBOTS_PENDING', () => {
        const action = {
            type: GET_ROBOTS_PENDING
        }
        expect(fetchRobots(undefined, action)).toEqual({...initialFetchState, isPending: true});
    })

    it('state after action GET_ROBOTS_SUCCESS', () => {
        const robots = [{
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        }];
        const action = {
            type: GET_ROBOTS_SUCCESS,
            payload: robots
        }
        expect(fetchRobots(undefined, action)).toEqual({...initialFetchState, isPending: false, robots: robots});
    })

    it('state after action GET_ROBOTS_FAILED', () => {
        const action = {
            type: GET_ROBOTS_FAILED,
            payload: 'test error'
        }
        expect(fetchRobots(undefined, action)).toEqual({...initialFetchState, isPending: false, error: 'test error'});
    })
})