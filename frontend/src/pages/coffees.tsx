import React from 'react';
import { CoffeePage } from '../app/pages/CoffeePage';
import { useGetCoffees } from '../app/application/coffeeService';

export default function Index(): JSX.Element {
  const { data: coffeesList, isLoading } = useGetCoffees();
  return !isLoading ? <CoffeePage coffeeList={coffeesList} /> : <>Loading coffees</>;
}
