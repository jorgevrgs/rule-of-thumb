import {
  BannerBottom,
  BannerTop,
  Celebrities,
  getCelebritiesService,
  Layout,
  LayoutContext,
  useFetchCelebrities,
} from '@app/frontend';
import type { GetServerSideProps, NextPage } from 'next';
import type { IndexPageProps } from '../types';

const Index: NextPage<IndexPageProps> = ({ navLinks, celebrities }) => {
  const { data, isLoading } = useFetchCelebrities(celebrities);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No celebrities</div>;
  }

  const [feturedCelebrity, ...otherCelebrities] = data;

  return (
    <LayoutContext.Provider value={{ navLinks, celebrity: feturedCelebrity }}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const celebrities = await getCelebritiesService();

  const navLinks = [
    { name: 'Past Trials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Login / Sign Up', href: '#' },
  ];

  return {
    props: {
      celebrities,
      navLinks,
    },
  };
};

export default Index;
