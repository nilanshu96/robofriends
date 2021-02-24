import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './constants';
import { setSearchField, getRobots } from './actions';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe("Actions test", () => {
    it("should return expected action for setSearchField", () => {
        const text = 'hello';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(setSearchField(text)).toEqual(expectedAction);
    });

    it("should dispatch correctly in getRobots for success case", (done) => {
        const mockRobots = [{
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        }]
        const successAction = { type: GET_ROBOTS_SUCCESS, payload: mockRobots };
        const dispatch = jest.fn();

        const server = setupServer(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(ctx.json(mockRobots))
            }),
        );
        server.listen();

        getRobots()(dispatch)
            .then(() => {
                expect(dispatch).toBeCalledWith({ type: GET_ROBOTS_PENDING });
                expect(dispatch).toBeCalledWith(successAction);
                done();
            })
            .catch(err => {
                server.close();
                done(err);
            })
            .finally(() => {
                server.close();
            });
    })

    it("should dispatch correctly in getRobots for failure case", (done) => {
        const server = setupServer(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(ctx.text('error'));
            }),
        );
        server.listen();
        const dispatch = jest.fn();
        getRobots()(dispatch)
            .then(()=> {
                const lastDispatchCallArgs = dispatch.mock.calls[dispatch.mock.calls.length - 1]
                expect(lastDispatchCallArgs[0].type).toEqual(GET_ROBOTS_FAILED);
                done();
            })
            .catch(err => {
                done(err);
            })
            .finally(() => {
                server.close();
            })
    })
})