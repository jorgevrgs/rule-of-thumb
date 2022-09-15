import {
  BannerBottom,
  BannerTop,
  Celebrities,
  DeviceType,
  getCelebrities,
  getRunningOperationPromises,
  Layout,
  LayoutContext,
  LayoutContextType,
  useGetCelebritiesQuery,
  wrapper,
} from '@app/frontend';
import { logger } from '@app/shared';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getSelectorsByUserAgent } from 'react-device-detect';
import PulseLoader from 'react-spinners/PulseLoader';

interface IndexPageProps {
  deviceType: LayoutContextType['deviceType'];
}

const Index: NextPage<IndexPageProps> = ({ deviceType }) => {
  const { data, isFetching } = useGetCelebritiesQuery();

  if (isFetching) {
    return <PulseLoader />;
  }

  if (!data) {
    return <div>No celebrities</div>;
  }

  const [featuredCelebrity, ...otherCelebrities] = data;

  logger.info(`Didplaying content for ${deviceType}`);

  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
      </Head>

      <LayoutContext.Provider value={{ featuredCelebrity, deviceType }}>
        <Layout>
          <BannerTop />

          <main role="main">
            <Celebrities celebrities={otherCelebrities} />
          </main>

          <BannerBottom />
        </Layout>
      </LayoutContext.Provider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    let deviceType = DeviceType.mobile;
    const userAgent = context.req.headers['user-agent'];

    if (userAgent) {
      const selector = getSelectorsByUserAgent(userAgent);

      if (selector.isDesktop) {
        deviceType = DeviceType.desktop;
      } else if (selector.isTablet) {
        deviceType = DeviceType.tablet;
      }
    }

    store.dispatch(getCelebrities.initiate());
    await Promise.all(getRunningOperationPromises());

    return {
      props: {
        deviceType,
      },
    };
  });

export default Index;
