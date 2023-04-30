import '../core/styles/globals.css';
import { QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app';
import { Layout } from '../app/components/Layout';
import { BrewAppProvider } from '../context/state';
import { queryCache } from '../react-query/queryClient';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
      <QueryClientProvider client={queryCache}>
          <BrewAppProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </BrewAppProvider>
      </QueryClientProvider>
  )
}
export default MyApp;
