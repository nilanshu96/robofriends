import { render } from "@testing-library/react";
import CardList from "./CardList";

test("renders correctly", () => {
    const mockRobots = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    }]
    const { container } = render(<CardList robots={mockRobots} />);

    expect(container.innerHTML).toMatchSnapshot();
})