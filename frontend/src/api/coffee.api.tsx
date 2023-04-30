import { CoffeeItem } from '../types/Coffee.type';

export const fetchCoffees = async (): Promise<CoffeeItem[]> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/coffees`).then(res => res.json())
}

