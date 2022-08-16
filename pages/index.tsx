import type { NextPage } from 'next';
import BannerBottom from '../components/banner-bottom';
import BannerTop from '../components/banner-top';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <BannerTop />

      <main role="main">👉 Your code goes here 👈</main>

      <BannerBottom />
    </Layout>
  );
};

export default Home;
