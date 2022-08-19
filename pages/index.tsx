import type { GetServerSideProps, NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Celebrities from '../components/celebrities';
import Layout from '../components/layout';
import { LayoutContext, servicesContainer } from '../infrastructure';
import type { Celebrity, IndexPageProps } from '../types';

const Home: NextPage<IndexPageProps> = ({ navLinks, celebrities }) => {
  return (
    <LayoutContext.Provider value={{ navLinks, celebrity: celebrities[0] }}>
      <Layout>
        <BannerTop />

        <main role="main">
          <Celebrities celebrities={celebrities.slice(1)} />
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

  const featured: Celebrity = {
    celebrityId: 'featured',
    name: 'Pope Francis',
    picture: '/assets/img/pope-francis.@2x.png',
    description:
      'Pope Francis is the head of the Catholic Church. He is the first Jesuit pope, the first from the Americas, the first from the Southern Hemisphere, and the first pope from outside Europe since the Syrian Gregory III, 1,700 years ago.',
    votes: {
      positive: 78,
      negative: 22,
    },
    active: true,
    lastUpdated: '',
    category: 'Religion',
  };

  celebrities.unshift(featured);

  console.log({ celebrities });

  return {
    props: {
      navLinks,
      celebrities,
    },
  };
};

export default Home;
