import type { GetStaticProps, NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Layout from '../components/layout';
import type { NavLinkProps } from '../types';

const Home: NextPage<NavLinkProps> = ({ navLinks }) => {
  return (
    <Layout navLinks={navLinks}>
      <BannerTop />

      <main role="main">👉 Your code goes here 👈</main>

      <BannerBottom />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
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
