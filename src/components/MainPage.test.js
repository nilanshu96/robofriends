import { render } from "@testing-library/react";
import MainPage from "./MainPage";

const initialState = {
  robots: [],
  error: undefined,
  isPending: true,
  searchField: "",
  onSearchChange: jest.fn(),
  getRobots: jest.fn(),
};

let mockProps = { ...initialState };

afterEach(() => {
    mockProps = {...initialState};
})

test("compare MainPage snapshot when pending", () => {
  const { container } = render(<MainPage {...mockProps} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<h1>LOADING</h1>"`);
});

test("compare MainPage snapshot when there is error", () => {
  mockProps.error = "some error";
  mockProps.isPending = false;
  const { container } = render(<MainPage {...mockProps} />);
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<h1>Failed to fetch the Robots</h1>"`
  );
});

test("compare Mainpage snapshot when there are robots", () => {
  mockProps.robots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  mockProps.isPending = false;
  const { container } = render(<MainPage {...mockProps} />);
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"tc\\"><div><h1 class=\\"f1\\">RoboFriends</h1><button color=\\"red\\">Count: 0</button></div><div class=\\"pa2\\"><input class=\\"pa3 ba b--green bg-lightest-blue\\" aria-label=\\"search robots\\" type=\\"search\\" placeholder=\\"search robots\\"></div><div style=\\"overflow: scroll; border: 5px solid black; height: 800px;\\"><div><div data-testid=\\"robocard\\" class=\\"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5\\"><img src=\\"https://robohash.org/1.png?size=200x200\\" alt=\\"robot\\"><div><h2>Leanne Graham</h2><p>Sincere@april.biz</p></div></div></div></div></div>"`
  );
});
