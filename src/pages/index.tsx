import {
  BannerBottom,
  BannerTop,
  Celebrities,
  DeviceType,
  getCelebritiesService,
  Layout,
  LayoutContext,
  LayoutContextType,
  useGetCelebritiesQuery,
} from '@app/frontend';
import { logger } from '@app/shared';
import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getSelectorsByUserAgent } from 'react-device-detect';
import PulseLoader from 'react-spinners/PulseLoader';

export interface BaseProps {
  dehydratedState: DehydratedState;
}

interface IndexPageProps extends BaseProps {
  deviceType: LayoutContextType['deviceType'];
}

const Index: NextPage<IndexPageProps> = ({ deviceType }) => {
  const { data, isLoading } = useGetCelebritiesQuery();

  if (isLoading) {
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

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  context
) => {
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

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['celebrities'],
    queryFn: getCelebritiesService,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      deviceType,
    },
  };
};

export default Index;
