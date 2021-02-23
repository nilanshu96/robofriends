import { render, fireEvent } from '@testing-library/react';
import CounterButton from './CounterButton';

const mockColor = 'red';

test("counter is correct", () => {
    const defaultText = "Count: ";
    const { container, getByRole } = render(<CounterButton color={mockColor} />);
    expect(container.textContent).toBe(defaultText + '0');
    fireEvent.click(getByRole('button'));
    expect(container.textContent).toBe(defaultText + '1');
})

test("CounterButton snapshot test", () => {
    const { container } = render(<CounterButton color={mockColor} />);
    expect(container.innerHTML).toMatchSnapshot();
})