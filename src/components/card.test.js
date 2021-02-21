import { render, screen } from '@testing-library/react';
import Card from './Card';

test('loads card properly', () => {
    render(<Card id='1' name='Mr 1' email='baroqueworks@gmail.com'/>);
    const cards = screen.getAllByRole('robocard');
    expect(cards.length).toEqual(1);
})