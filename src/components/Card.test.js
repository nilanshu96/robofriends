import { render } from "@testing-library/react";
import Card from "./Card";

test("loads a single card", () => {
    const { getAllByTestId } = render(
        <Card id="1" name="Mr 1" email="baroqueworks@gmail.com" />
    );
    const cards = getAllByTestId("robocard");
    expect(cards.length).toEqual(1);
});

test("renders correctly", () => {
    const { container } = render(
        <Card id="1" name="Mr 1" email="baroqueworks@gmail.com" />
    );
    expect(container.innerHTML).toMatchSnapshot();
})