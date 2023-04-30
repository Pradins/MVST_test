import { useQuery, UseQueryResult } from 'react-query';
import { ServerStateKeysEnum } from '../../react-query/queryKeys';
import { TeaItem } from '../../types/Tea.type';
import { fetchTeas } from '../../api/tea.api';

export const useGetTeas = (): UseQueryResult<TeaItem[]> => {
    return useQuery([ServerStateKeysEnum.TeaList], () => {
        return fetchTeas();
    });
};


