import React from 'react';
import { render, screen } from '@testing-library/react';
import {CoffeePage} from './CoffeePage';
import {CoffeeVariety} from '../../types/Coffee.type';

const mockCoffeeList = [{
        id: '1',
        title: 'coffee1',
        image: '',
        variety: CoffeeVariety.ROBUSTA
    },
    {
        id: '2',
        title: 'coffee2',
        image: '',
        variety: CoffeeVariety.ARABIC
    }
];

describe('FactorsList', () => {
    const renderComponent = (coffeList): void => {
        render(
            <CoffeePage coffeeList= {coffeList}/>
        );
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the coffee with 2 items', () => {
        renderComponent(mockCoffeeList);
        expect(screen.getByTestId('title')).toHaveTextContent('Our beloved coffee');
        expect(screen.getByTestId('subtitle')).toHaveTextContent('Hand-picked, made with love, curated, call it what you want. But we promise you, this will be the best coffe of your life.');
        expect(screen.getAllByTestId('list-item-card')).toHaveLength(2);
        expect(screen.getAllByText(CoffeeVariety.ARABIC)).toHaveLength(1);
        expect(screen.getAllByText(CoffeeVariety.ROBUSTA)).toHaveLength(1);
    });
});
