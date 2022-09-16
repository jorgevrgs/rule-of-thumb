import { wrapper } from '@app/frontend';
import { logger } from '@app/shared';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../assets/styles/globals.scss';

function App({ Component, ...pageProps }: AppProps) {
  logger.info('Loading App...');
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />;
    </Provider>
  );
}

export default App;
