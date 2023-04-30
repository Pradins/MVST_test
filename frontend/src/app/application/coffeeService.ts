import { useQuery, UseQueryResult } from 'react-query';
import { ServerStateKeysEnum } from '../../react-query/queryKeys';
import { fetchCoffees } from '../../api/coffee.api';
import { CoffeeItem } from '../../types/Coffee.type';

export const useGetCoffees = (): UseQueryResult<CoffeeItem[]> => {
  return useQuery([ServerStateKeysEnum.CoffeeList], () => {
    return fetchCoffees();
  });
};


