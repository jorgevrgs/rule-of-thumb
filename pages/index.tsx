import type { GetServerSideProps, NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Layout from '../components/layout';
import { NavLinksContext, servicesContainer } from '../infrastructure';
import type { NavLinkProps } from '../types';

const Home: NextPage<NavLinkProps> = ({ navLinks }) => {
  return (
    <NavLinksContext.Provider value={navLinks}>
      <Layout>
        <BannerTop />

        <main role="main">👉 Your code goes here 👈</main>

        <BannerBottom />
      </Layout>
    </NavLinksContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<
  NavLinkProps
> = async () => {
  const getLinksService = servicesContainer.cradle.getLinksService;

  const navLinks = await getLinksService();

  return {
    props: {
      navLinks,
    },
  };
};

export default Home;
