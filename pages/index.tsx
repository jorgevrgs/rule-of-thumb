import BannerBottom from 'components/banner-bottom';
import BannerTop from 'components/banner-top';
import Celebrities from 'components/celebrities';
import Layout from 'components/layout';
import { servicesContainer } from 'infrastructure/containers';
import { LayoutContext } from 'infrastructure/contexts';
import type { GetServerSideProps, NextPage } from 'next';
import type { IndexPageProps } from 'types';

const Index: NextPage<IndexPageProps> = ({ navLinks, celebrities }) => {
  const [feturedCelebrity, ...otherCelebrities] = celebrities;

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
  const getLinksService = servicesContainer.cradle.getLinksService;
  const getCelebritiesService = servicesContainer.cradle.getCelebritiesService;

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
