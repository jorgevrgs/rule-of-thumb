import type { GetServerSideProps, NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Celebrities from '../components/celebrities';
import Layout from '../components/layout';
import { NavLinksContext, servicesContainer } from '../infrastructure';
import type { IndexPageProps } from '../types';

const Home: NextPage<IndexPageProps> = ({ navLinks, celebrities }) => {
  console.log({ celebrities });
  return (
    <NavLinksContext.Provider value={navLinks}>
      <Layout>
        <BannerTop />

        <main role="main">
          <Celebrities celebrities={celebrities} />
        </main>

        <BannerBottom />
      </Layout>
    </NavLinksContext.Provider>
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

export default Home;
