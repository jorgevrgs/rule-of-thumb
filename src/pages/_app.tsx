import { wrapper } from '@app/frontend';
import { logger } from '@app/shared';
import type { AppProps } from 'next/app';
import '../assets/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  logger.info('Loading App...');

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
