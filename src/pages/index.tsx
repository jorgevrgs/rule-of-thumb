import {
  BannerBottom,
  BannerTop,
  Celebrities,
  DeviceType,
  getCelebritiesService,
  Layout,
  LayoutContext,
  useFetchCelebrities,
} from '@app/frontend';
import type { GetServerSideProps, NextPage } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import type { IndexPageProps } from '../types';

const Index: NextPage<IndexPageProps> = ({
  navLinks,
  celebrities,
  deviceType,
}) => {
  const { data, isLoading } = useFetchCelebrities(celebrities);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No celebrities</div>;
  }

  const [feturedCelebrity, ...otherCelebrities] = data;

  return (
    <LayoutContext.Provider
      value={{ navLinks, celebrity: feturedCelebrity, deviceType }}
    >
      <Layout>
        <BannerTop />

        <main role="main">
          <Celebrities celebrities={otherCelebrities} />
        </main>

        <BannerBottom />
      </Layout>
    </LayoutContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const celebrities = await getCelebritiesService();

  const navLinks = [
    { name: 'Past Trials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Login / Sign Up', href: '#' },
  ];

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

  return {
    props: {
      celebrities,
      navLinks,
      deviceType,
    },
  };
};

export default Index;
