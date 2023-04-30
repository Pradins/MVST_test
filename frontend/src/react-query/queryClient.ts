import { QueryClient } from 'react-query'

export const queryCache = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000
        }
    }
});
