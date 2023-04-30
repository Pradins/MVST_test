import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItemCard } from './ListItemCard';
import { CoffeeVariety } from '../../../types/Coffee.type';

const mockCoffee = {
    id: '1',
    title: 'coffee1',
    image: 'mockImageUrl',
    variety: CoffeeVariety.ROBUSTA
};

describe('ListItemCard', () => {
    const renderComponent = (mockCoffee): void => {
        render(
            <ListItemCard item= {mockCoffee}/>
        );
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the ListItemCard with its proper values', () => {
        renderComponent(mockCoffee);
        expect(screen.getByTestId('list-item-image')).toHaveAttribute('src', mockCoffee.image);
        expect(screen.getByTestId('list-item-title')).toHaveTextContent(mockCoffee.title);
        expect(screen.getByTestId('tag')).toHaveTextContent(mockCoffee.variety);
    });
});
