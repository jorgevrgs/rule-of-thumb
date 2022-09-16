import {
  BannerBottom,
  BannerTop,
  Celebrities,
  DeviceType,
  getCelebrities,
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
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <PulseLoader />;
      </div>
    );
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

    await store.dispatch(getCelebrities.initiate());

    return {
      props: {
        deviceType,
      },
    };
  });

export default Index;
