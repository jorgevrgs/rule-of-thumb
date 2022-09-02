import type { IndexPageProps } from '@app/frontend';
import {
  BannerBottom,
  BannerTop,
  Celebrities,
  getCelebritiesService,
  getLinksService,
  Layout,
  LayoutContext,
  useFetchCelebrities,
} from '@app/frontend';
import type { GetServerSideProps, NextPage } from 'next';

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

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const [navLinks, celebrities] = await Promise.all([
    getLinksService(),
    getCelebritiesService(),
  ]);

  return {
    props: {
      navLinks,
      celebrities,
    },
  };
};

export default Index;
