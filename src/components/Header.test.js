import { render } from '@testing-library/react';
import Header from './Header';

test("compare header snapshot", () => {
    const { container, rerender } = render(<Header />);
    expect(container.innerHTML).toMatchSnapshot();

    //to check shouldComponentUpdate
    rerender(<Header />);
    expect(container.innerHTML).toMatchSnapshot();
})