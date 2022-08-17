import type { GetStaticProps, NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Layout from '../components/layout';
import { NavLinksContext } from '../contexts/nav-links.context';
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

export const getStaticProps: GetStaticProps<NavLinkProps> = () => {
  const navLinks = [
    { name: 'Past Trials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Login / Sign Up', href: '#' },
  ];

  return {
    props: {
      navLinks,
    },
  };
};

export default Home;
